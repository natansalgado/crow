import { useState } from 'react'
import { FaRegHeart, FaHeart, FaRegChartBar } from 'react-icons/fa'
import { CommentContainer, Avatar, Box, Box2, Username, Post, TimeStamp, Texts, Span, Img, Feed, Part } from './style.js'

export const Comment = ({ name, post, avatar, date, image, liked, id, feed }) => {
  const [like, setLike] = useState(liked)
  const [likes, setLikes] = useState(feed.likes)
  const [views] = useState(feed.views)

  const handleComment = () => {
    const divided = post.trim().split('\n')
    return divided.map((line, index) =>
      line === '' ?
        <br key={`${id}-${index}`} />
        :
        <p key={`${id}-${index}`}>{line}</p>
    )
  }

  const handleLike = () => {
    setLikes(like ? likes - 1 : likes + 1)
    setLike(!like)
  }

  const calcTime = () => {
    const months = ['jan', 'fev', 'mar', 'abril', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

    const now = Math.floor(Date.now() / 1000);
    const diffSeconds = now - date;
    const dateObj = new Date(date * 1000);
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const currentYear = new Date(now * 1000).getFullYear();

    switch (true) {
      case (diffSeconds < 60):
        return 'agora';
      case (diffSeconds < 3600):
        return `${Math.floor(diffSeconds / 60)} min`;
      case (diffSeconds < 86400):
        return `${Math.floor(diffSeconds / 3600)} h`;
      case (year === currentYear):
        return `${day} de ${months[month]} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      default:
        return `${day} de ${months[month]} de ${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
  }

  return (
    <CommentContainer>
      <Box>
        <Avatar src={avatar} />
        <Box2>
          <Texts>
            <Username>{name}</Username>
            <Span>·</Span>
            <TimeStamp>{calcTime()}</TimeStamp>
          </Texts>
          {
            handleComment() &&
            <Post> {handleComment()}</Post>
          }
        </Box2>
      </Box>

      {
        image &&
        <Img src={image} alt="Imagem do post" />
      }
      <Feed>
        <Part className='like' onClick={handleLike}>
          {
            like ?
              <FaHeart color="#cc0648" size={20} />
              :
              <FaRegHeart className='svg' size={20} />
          }
          {likes}
        </Part>
        <Part className='views'>
          <FaRegChartBar size={20} />
          {views}
        </Part>
      </Feed>
    </CommentContainer>
  )
}