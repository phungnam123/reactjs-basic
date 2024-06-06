const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      <div className="youtube-img">
        <img src={props.image} alt="img" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="avatar" className="youtube-avatar" />
        <div className="youtube-info">
          <h4 className="youtube-tỉtle">
            {props.title || 'This is exemple of title'}
          </h4>
          <p className="youtuve-author">
            {props.author || 'This is example of author name'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default YoutubeItem
