import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
	'posts',
	async (query) => {
		const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}&tags=story`)
		return response.json()
	}
)

export const fetchPostDetails = createAsyncThunk(
	'postDetails',
	async (objectID) => {
		const response = await fetch(`http://hn.algolia.com/api/v1/items/${objectID}`)
		return response.json()
	}
)

const initialState = {
	results: [],
	loader: {
    post: false,
    postDetails: false
  },
	postDetails: {},
	postDetailsURL: ''
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
    	setPostDetailsURL: (state, action) => {
    		state.postDetailsURL = action.payload
    	}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loader.post = true
		})
		builder.addCase(fetchPosts.rejected, (state, action) => {
			console.log('rejected')
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.results = [...action.payload.hits]
			state.loader.post = false
		})
		builder.addCase(fetchPostDetails.pending, (state, action) => {
      state.loader.postDetails = true
		})
		builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.loader.postDetails = false
			state.postDetails = {...action.payload}
		})
	}
})
export const {setPostDetailsURL} = appSlice.actions

export default appSlice.reducer