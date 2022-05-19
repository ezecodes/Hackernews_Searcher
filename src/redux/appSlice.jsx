import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
	'posts',
	async (query) => {
		const response = await fetch(query)
		return response.json()
	}
)

const initialState = {
	results: [],
	loader: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loader = true
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.results = [...action.payload.hits]
			state.loader = false
		})
	}
})

export const {getResults} = appSlice.actions
export default appSlice.reducer