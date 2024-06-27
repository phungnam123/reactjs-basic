import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
// import lodash from 'lodash'

const HackerNews = () => {
  // https://hn.algolia.com/api/v1/search?query=react

  const [hits, setHits] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  )

  const hanldeFetchData = useRef({})

  hanldeFetchData.current = async () => {
    setLoading(true)
    try {
      const response = await axios.get(url)
      setHits(response.data?.hits || [])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrorMsg(`The error happen ${error}`)
    }
  }

  useEffect(() => {
    hanldeFetchData.current()
  }, [url])

  // const hanldeUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value)
  // }, 1000)

  return (
    <div className="bg-white shadow-md w-2/4 mx-auto p-5 mt-3 mb-5 rounded-lg">
      <div className="flex mb-2">
        <input
          type="text"
          className="w-full block p-3 border-input border-2 border-gray-200 focus:border-blue-500 outline-none"
          placeholder="Enter your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-3 ml-3"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="border-blue-500 rounded-full w-8 h-8 border-4 border-r-4 border-r-transparent animate-spin my-4 mx-auto"></div>
      )}
      {!loading && <p>{errorMsg}</p>}
      <div className="flex flex-wrap gap-3 mt-3 mb-3">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
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

export default HackerNews
