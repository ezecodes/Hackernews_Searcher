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
	results: [
{
  "created_at": "2021-02-08T17:02:49.000Z",
  "title": "Rust Foundation: Hello, World",
  "url": "https://foundation.rust-lang.org/posts/2021-02-08-hello-world/",
  "author": "steveklabnik",
  "points": 865,
  "story_text": null,
  "comment_text": null,
  "num_comments": 268,
  "story_id": null,
  "story_title": null,
  "story_url": null,
  "parent_id": null,
  "created_at_i": 1612803769,
  "_tags": [
    "story",
    "author_steveklabnik",
    "story_26067118"
  ],
  "objectID": "26067118",
  "_highlightResult": {
    "title": {
      "value": "Rust Foundation: <em>Hello</em>, <em>Worl</em>d",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "url": {
      "value": "https://foundation.rust-lang.org/posts/2021-02-08-<em>hello</em>-<em>worl</em>d/",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "author": {
      "value": "steveklabnik",
      "matchLevel": "none",
      "matchedWords": []
    }
  }
},
{
  "created_at": "2017-11-29T13:18:35.000Z",
  "title": "Hello, world: this is WikiTribune",
  "url": "https://www.wikitribune.com/story/2017/10/30/media/hello-world/13988/",
  "author": "nafizh",
  "points": 830,
  "story_text": null,
  "comment_text": null,
  "num_comments": 235,
  "story_id": null,
  "story_title": null,
  "story_url": null,
  "parent_id": null,
  "created_at_i": 1511961515,
  "relevancy_score": 7810,
  "_tags": [
    "story",
    "author_nafizh",
    "story_15806500"
  ],
  "objectID": "15806500",
  "_highlightResult": {
    "title": {
      "value": "<em>Hello</em>, <em>worl</em>d: this is WikiTribune",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "url": {
      "value": "https://www.wikitribune.com/story/2017/10/30/media/<em>hello</em>-<em>worl</em>d/13988/",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "author": {
      "value": "nafizh",
      "matchLevel": "none",
      "matchedWords": []
    }
  }
},{
  "created_at": "2022-03-09T05:59:32.000Z",
  "title": "Bugs in Hello World",
  "url": "https://blog.sunfishcode.online/bugs-in-hello-world/",
  "author": "sizediterable",
  "points": 527,
  "story_text": null,
  "comment_text": null,
  "num_comments": 252,
  "story_id": null,
  "story_title": null,
  "story_url": null,
  "parent_id": null,
  "created_at_i": 1646805572,
  "_tags": [
    "story",
    "author_sizediterable",
    "story_30611367"
  ],
  "objectID": "30611367",
  "_highlightResult": {
    "title": {
      "value": "Bugs in <em>Hello</em> <em>Worl</em>d",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "url": {
      "value": "https://blog.sunfishcode.online/bugs-in-<em>hello</em>-<em>worl</em>d/",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "author": {
      "value": "sizediterable",
      "matchLevel": "none",
      "matchedWords": []
    }
  }
},{
  "created_at": "2021-01-15T02:31:23.000Z",
  "title": "Apple M1 Assembly Language Hello World",
  "url": "https://smist08.wordpress.com/2021/01/08/apple-m1-assembly-language-hello-world/",
  "author": "_zhqs",
  "points": 372,
  "story_text": null,
  "comment_text": null,
  "num_comments": 111,
  "story_id": null,
  "story_title": null,
  "story_url": null,
  "parent_id": null,
  "created_at_i": 1610677883,
  "_tags": [
    "story",
    "author__zhqs",
    "story_25786236"
  ],
  "objectID": "25786236",
  "_highlightResult": {
    "title": {
      "value": "Apple M1 Assembly Language <em>Hello</em> <em>Worl</em>d",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "url": {
      "value": "https://smist08.wordpress.com/2021/01/08/apple-m1-assembly-language-<em>hello</em>-<em>worl</em>d/",
      "matchLevel": "full",
      "fullyHighlighted": false,
      "matchedWords": [
        "hello",
        "worl"
      ]
    },
    "author": {
      "value": "_zhqs",
      "matchLevel": "none",
      "matchedWords": []
    }
  }
}
	],
	query: '',
	sortAttr: {
		comments: 'desc'
	},
	temp: [],
	loader: {
    post: false,
    postDetails: false
  },
  placeholderImg: true,
	postDetails: [],
	postDetailsURL: ''
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
			const rule = action.payload
			state.temp = state.results
			if (rule.date === 'up') {
				state.results.sort((a,b) => {
					if (a.created_at_i > b.created_at_i) return 1
					else {
						return -1
					}
				})
			}
			if (rule.comment === 'up') {
				state.results.sort((a,b) => {
					if (a.num_comments > b.num_comments) return 1
					else {
						return -1
					}
				})
			}
			if (rule.points === 'up') {
				state.results.sort((a,b) => {
					if (a.points > b.points) return 1
					else {
						return -1
					}
				})
			}

			if (rule.date === 'down') {
				state.results.sort((a,b) => {
					if (a.created_at_i > b.created_at_i) return -1
					else {
						return 1
					}
				})
			}
			if (rule.comment === 'down') {
				state.results.sort((a,b) => {
					if (a.num_comments > b.num_comments) return -1
					else {
						return 1
					}
				})
			}
			if (rule.points === 'down') {
				state.results.sort((a,b) => {
					if (a.points > b.points) return -1
					else {
						return 1
					}
				})
			}
		},
		performReset: (state, action) => {
			if(state.temp.length > 0){
				state.results = state.temp
			}
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