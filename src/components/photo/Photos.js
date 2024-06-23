import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([])
  const [nextPage, setNextPage] = useState(1)

  const getRandomPhotos = async (page) => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=8`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const hanldeLoadMorePhotos = useRef()

  hanldeLoadMorePhotos.current = () => {
    getRandomPhotos(nextPage).then((images) => {
      const newImages = [...randomPhotos, ...images]
      setRandomPhotos(newImages)
      setNextPage(nextPage + 1)
    })
  }

  useEffect(() => {
    hanldeLoadMorePhotos.current()
  }, [hanldeLoadMorePhotos])
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => {
            return (
              <div
                key={item.id}
                className="p-3 bg-white shadow-md rounded-lg h-[200px]"
              >
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          })}
      </div>
      <div className="text-center">
        <button
          onClick={hanldeLoadMorePhotos.current}
          className="bg-purple-400 inline-block px-8 py-3 text-white"
        >
          Load More
        </button>
      </div>
    </div>
  )
}

export default Photos
