import { useEffect, useReducer, useRef } from 'react'
import axios from 'axios'

const initialState = {
  hits: [],
  query: '',
  loading: true,
  errorMsg: '',
  url: `https://hn.algolia.com/api/v1/search?query=''`,
}

const newReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_DATA': {
      return { ...state, hits: action.payload }
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload }
    }
    case 'SET_ERROR': {
      return { ...state, errorMsg: action.payload }
    }
    case 'SET_QUERY': {
      return { ...state, query: action.payload }
    }
    case 'SET_URL': {
      return { ...state, url: action.payload }
    }
    default:
      break
  }
}

const HackerNewReducer = () => {
  const [state, dispatch] = useReducer(newReducer, initialState)
  const hanldeFetchData = useRef({})
  hanldeFetchData.current = async () => {
    dispatch({
      type: 'SET_LOADING',
      payload: true,
    })
    try {
      const response = await axios.get(state.url)
      dispatch({
        type: 'SET_DATA',
        payload: response.data?.hits || [],
      })
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      })
    } catch (error) {
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      })
      dispatch({
        type: 'SET_ERROR',
        payload: `The happend error ${error}`,
      })
    }
  }

  useEffect(() => {
    hanldeFetchData.current()
  }, [state.url])

  return (
    <div className="bg-white shadow-md w-2/4 mx-auto p-5 mt-3 mb-5 rounded-lg">
      <div className="flex mb-2">
        <input
          type="text"
          className="w-full block p-3 border-input border-2 border-gray-200 focus:border-blue-500 outline-none"
          placeholder="Enter your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: 'SET_QUERY',
              payload: e.target.value,
            })
          }
        />
        <button
          className="bg-blue-500 text-white font-semibold p-3 ml-3"
          disabled={state.loading}
          onClick={() =>
            dispatch({
              type: 'SET_URL',
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          style={{ opacity: state.loading ? '0.25' : '1' }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="border-blue-500 rounded-full w-8 h-8 border-4 border-r-4 border-r-transparent animate-spin my-4 mx-auto"></div>
      )}
      {!state.loading && <p className="text-red-500">{state.errorMsg}</p>}
      <div className="flex flex-wrap gap-3 mt-3 mb-3">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null
            return (
              <h3 className="p-3 bg-gray-200 rounded-md" key={index}>
                {item.title}
              </h3>
            )
          })}
      </div>
    </div>
  )
}

export default HackerNewReducer
