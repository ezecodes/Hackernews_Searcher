import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
	'posts',
	async (query) => {
		const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`)
		return response.json()
	}
)

export const fetchPostDetails = createAsyncThunk(
	'postDetails',
	async (objectID) => {
		const response = await fetch(`https://hn.algolia.com/api/v1/items/${objectID}`)
		return response.json()
	}
)

const initialState = {
	results: [],
	query: '',
	sortAttr: {
		comments: 'desc'
	},
	loader: {
    post: false,
    postDetails: false
  },
  placeholderImg: true,
	postDetails: [],
	postDetailsURL: ''
}
function SORT(arr, rule, matchCase) {
	if (rule === 'up') {
		arr.sort((a,b) => {
			if (String(a[`${matchCase}`]).toLowerCase() > String(b[`${matchCase}`]).toLowerCase()) return 1
			else {
				return -1
			}
		})
	}
	if (rule === 'down') {
		arr.sort((a,b) => {
			if (String(a[`${matchCase}`]).toLowerCase() > String(b[`${matchCase}`]).toLowerCase()) return -1
			else {
				return 1
			}
		})
	}
	return arr
}
const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload
		},
		setPlaceholderImg: (state, action) => {
			state.placeholderImg = action.payload
		},
		performSort: (state, action) => {
			const {matchCase, rule} = action.payload
			state.results = SORT(state.results, rule, matchCase)

		},
		performReset: (state, action) => {
			state.results = JSON.parse(sessionStorage.getItem('results')) 
		},
  	setPostDetailsURL: (state, action) => {
  		state.postDetailsURL = action.payload
  	},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loader.post = true
		})
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.loader.post = false
			state.placeholderImg = true
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.results = [...action.payload.hits]
			state.loader.post = false
			sessionStorage.setItem('results', JSON.stringify(action.payload.hits))
		})
		builder.addCase(fetchPostDetails.pending, (state, action) => {
      state.loader.postDetails = true
		})
		builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.loader.postDetails = false
			state.postDetails = [...state.postDetails, action.payload]
		})
	}
})
export const {setPostDetailsURL, performSort, setPlaceholderImg, setQuery, performReset} = appSlice.actions

export default appSlice.reducer