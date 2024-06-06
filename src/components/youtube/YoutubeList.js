import { YoutubeData } from '../../data'
import YoutubeItem from './YoutubeItem'

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        return (
          <YoutubeItem
            key={index + 1}
            image={item.image}
            avatar={item.avatar || item.image}
            title={item.title || 'This is example of title'}
            author={item.author || 'This is example of name author'}
            className={index === 1 ? 'abc' : ''}
          ></YoutubeItem>
        )
      })}
    </div>
  )
}

export default YoutubeList
