import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appslice'

const store = configureStore({
	reducer: {
		app: appSlice
	}
})

export default store

