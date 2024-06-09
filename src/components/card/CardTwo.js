import styled, { css } from 'styled-components'

const StyleCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
  }
  .card-img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
  .card-content {
    position: absolute;
    background: white;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    padding: 20px;
    z-index: 10;
    width: calc(100% - 36px);
    border-radius: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .user-avatar {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .user-name {
    font-weight: 300px;
    color: #333;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    font-weight: 500px;
    font-size: 18px;
    color: black;
  }
  .card-amount {
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, blue, green);
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    background-clip: text;
  }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .card-icon {
    width: 30px;
    height: 30px;
  }
`

const Card2 = (props) => {
  return (
    <StyleCard secondary={props.secondary}>
      <div className="card-image">
        <img
          className="card-img"
          src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900"
              alt=""
            />
            <span className="user-name">@zrndson</span>
          </div>
          <div className="card-meta">
            <img className="card-icon" src="./icons-heart.png" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
    </StyleCard>
  )
}

export default Card2
