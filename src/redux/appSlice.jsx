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
	loader: false,
	postDetails: {
    "id": 17362806,
    "created_at": "2018-06-21T07:08:38.000Z",
    "created_at_i": 1529564918,
    "type": "story",
    "author": "avrmav",
    "title": "Papers for software architecture / design",
    "url": null,
    "text": "<p>I am very much interested about software architecture, Design Patterns, Clean Code, OO concepts. I wanted to ask if there is an ongoing research in this kind of topics or are more or less fixed? Are there any new papers, lets say the last 5 years, that you would suggest to read?</p><p>In terms of books I have read, the GOF book, Clean Code, Clean Architecture, Pragmatic Programmer and even more, I am looking for fresh ideas.</p>",
    "points": 33,
    "parent_id": null,
    "story_id": null,
    "children": [
        {
            "id": 17364230,
            "created_at": "2018-06-21T11:52:48.000Z",
            "created_at_i": 1529581968,
            "type": "comment",
            "author": "gazarullz",
            "title": null,
            "url": null,
            "text": "<p>Out of my head, of relevant interest in the distributed systems field are the following books:</p><p>Designing Distributed Systems\n<a href=\"https:&#x2F;&#x2F;www.oreilly.com&#x2F;library&#x2F;view&#x2F;designing-distributed-systems&#x2F;9781491983638&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.oreilly.com&#x2F;library&#x2F;view&#x2F;designing-distributed-s...</a></p><p>Building Evolutionary Architectures\n<a href=\"http:&#x2F;&#x2F;shop.oreilly.com&#x2F;product&#x2F;0636920080237.do\" rel=\"nofollow\">http:&#x2F;&#x2F;shop.oreilly.com&#x2F;product&#x2F;0636920080237.do</a></p><p>Building Microservices\n<a href=\"http:&#x2F;&#x2F;shop.oreilly.com&#x2F;product&#x2F;0636920033158.do\" rel=\"nofollow\">http:&#x2F;&#x2F;shop.oreilly.com&#x2F;product&#x2F;0636920033158.do</a></p><p>They encompass most of the topics you&#x27;ve enumerated earlier.</p>",
            "points": null,
            "parent_id": 17362806,
            "story_id": 17362806,
            "children": [],
            "options": []
        },
        {
            "id": 17363220,
            "created_at": "2018-06-21T08:40:59.000Z",
            "created_at_i": 1529570459,
            "type": "comment",
            "author": "goralph",
            "title": null,
            "url": null,
            "text": "<p>Papers we love[0] has a couple of good ones, my favourite being &quot;Out of the Tar Pit&quot;</p><p>[0]: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;papers-we-love&#x2F;papers-we-love&#x2F;tree&#x2F;master&#x2F;design\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;papers-we-love&#x2F;papers-we-love&#x2F;tree&#x2F;master...</a></p>",
            "points": null,
            "parent_id": 17362806,
            "story_id": 17362806,
            "children": [
                {
                    "id": 17365879,
                    "created_at": "2018-06-21T15:14:45.000Z",
                    "created_at_i": 1529594085,
                    "type": "comment",
                    "author": "z5h",
                    "title": null,
                    "url": null,
                    "text": "<p>Wish I could upvote this more.</p><p>In short: Complexity is the biggest killer. And here&#x27;s a way to view it and tame it.</p>",
                    "points": null,
                    "parent_id": 17363220,
                    "story_id": 17362806,
                    "children": [],
                    "options": []
                }
            ],
            "options": []
        },
        {
            "id": 17382734,
            "created_at": "2018-06-23T18:47:58.000Z",
            "created_at_i": 1529779678,
            "type": "comment",
            "author": "paulborza",
            "title": null,
            "url": null,
            "text": "<p>The Architecture of Open Source Applications</p><p><a href=\"http:&#x2F;&#x2F;aosabook.org&#x2F;en&#x2F;index.html\" rel=\"nofollow\">http:&#x2F;&#x2F;aosabook.org&#x2F;en&#x2F;index.html</a></p>",
            "points": null,
            "parent_id": 17362806,
            "story_id": 17362806,
            "children": [],
            "options": []
        },
        {
            "id": 17372415,
            "created_at": "2018-06-22T08:31:39.000Z",
            "created_at_i": 1529656299,
            "type": "comment",
            "author": "q-base",
            "title": null,
            "url": null,
            "text": "<p>Are there any one of those books that you would especially recommend? I have considered the Pragmatic Programmer - but is there more to it than what is implied in the title?</p>",
            "points": null,
            "parent_id": 17362806,
            "story_id": 17362806,
            "children": [],
            "options": []
        }
    ],
    "options": []
	},

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
			state.loader = true
		})
		builder.addCase(fetchPosts.rejected, (state, action) => {
			console.log('rejected')
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.results = [...action.payload.hits]
			state.loader = false
		})
		builder.addCase(fetchPostDetails.pending, (state, action) => {

		})
		builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
			// console.log(action.payload)
			// state.postDetails = {...action.payload}
		})
	}
})
export const {setPostDetailsURL} = appSlice.actions

export default appSlice.reducer