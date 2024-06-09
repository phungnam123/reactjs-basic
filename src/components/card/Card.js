import styled from 'styled-components'

const StyleCard = styled.div`
  position: relative;
`
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`

const CardContent = styled.div`
  position: absolute;
  background: white;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  padding: 20px;
  z-index: 10;
  width: calc(100% - 36px);
  border-radius: 20px;
`

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
`

const UserAvatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`

const UserName = styled.div`
  font-weight: 300px;
  color: #333;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.h3`
  font-weight: 500px;
  font-size: 18px;
  color: black;
`

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  background-clip: text;
`

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CardIcon = styled.img`
  width: 30px;
  height: 30px;
`

const Card = () => {
  return (
    <StyleCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900"
              alt=""
            />
            <UserName>@zrndson</UserName>
          </CardUser>
          <CardMeta>
            <CardIcon src="./icons-heart.png" alt="" />
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount>12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyleCard>
  )
}

export default Card
