import { useEffect, useState } from 'react'

import { Publication } from '../../components/Publication';
import { NewComment } from '../../components/NewComment'
import { Comment } from '../../components/Comment';
import { NewPost } from '../../components/NewPost';
import { Header } from '../../components/Header';
import { Login } from '../../components/Login'
import { Box } from '@mui/material';

import { commentsAPI } from '../../APIS/commentsAPI'
import { postsAPI } from '../../APIS/postsAPI'

import placeholderImage from '../../assets/placeholder_image.jpeg'

export const Home = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [userName, setUserName] = useState('user')
  const [userAvatar, setUserAvatar] = useState(null)

  const [userCommentPost, setCommentUserPost] = useState('')
  const [commentImage, setCommentImage] = useState(null)
  const [comments, setComments] = useState(commentsAPI)
  const [posts, setPosts] = useState(postsAPI)
  const [userPost, setUserPost] = useState('')
  const [search, setSearch] = useState('')
  const [image, setImage] = useState(null)

  const handleLogin = (userName, userAvatar) => {
    setUserAvatar(userAvatar)
    setUserName(userName)
    setIsLogged(true)
  }

  const handleNewPost = (newPost) => {
    setUserPost(newPost)
  }

  const handleNewCommentPost = (newPost) => {
    setCommentUserPost(newPost)
  }

  const handleImageUpload = (image) => {
    setImage(image)
  }

  const handleCommentImageUpload = (image) => {
    setCommentImage(image)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleProfile = () => {
    setIsLogged(false)
  }

  const handleSubmit = () => {
    const newPost = {
      id: posts.length,
      name: userName,
      avatar: userAvatar ? URL.createObjectURL(userAvatar) : placeholderImage,
      content: userPost,
      date: Math.floor(Date.now() / 1000),
      image: image ? URL.createObjectURL(image) : null,
      liked: false,
      feed: { likes: 0, views: 0 },
      comments: []
    }
    setImage(null)
    setUserPost('')
    setPosts(prevPosts => [newPost, ...prevPosts])
  }

  const handleCommentSubmit = (postId) => {
    const newComment = {
      ...comments[0],
      id: comments.length,
      post: postId,
      name: userName,
      avatar: userAvatar ? URL.createObjectURL(userAvatar) : placeholderImage,
      content: userCommentPost,
      date: Math.floor(Date.now() / 1000),
      image: commentImage ? URL.createObjectURL(commentImage) : null,
      liked: false,
      feed: { likes: 0, views: 0 }
    }
    setCommentUserPost('')
    setCommentImage(null)
    setComments(prevComments => [newComment, ...prevComments])
  }


  const filteredPosts = search.length > 0
    ? posts.filter(post => {
      const content = post.content.toLowerCase().includes(search.toLowerCase())
      const name = post.name.toLowerCase().includes(search.toLowerCase())
      return content || name
    })
    : []

  useEffect(() => {
    setSearch('')
  }, [posts])

  return (
    <>
      {
        !isLogged &&
        <Login login={handleLogin} />
      }
      <Header>
        <input value={search} onChange={handleSearch} type="text" placeholder="Pesquisar" id='input' />
      </Header>
      < NewPost
        login={handleProfile}
        onImageChange={handleImageUpload}
        post={userPost}
        onChange={handleNewPost}
        onClick={handleSubmit}
        propUserAvatar={userAvatar}
      />
      <Box className='time-line'>
        {
          search.length > 0 ?
            filteredPosts.map(post =>
              <Publication
                key={post.id}
                id={post.id}
                avatar={post.avatar}
                name={post.name}
                post={post.content}
                date={post.date}
                image={post.image}
                liked={post.liked}
                feed={post.feed}
                length={comments.filter(e => e.post === post.id)}
              >
                <NewComment
                  id={post.id}
                  onImageChange={handleCommentImageUpload}
                  post={userCommentPost}
                  onChange={handleNewCommentPost}
                  onClick={handleCommentSubmit}
                  propUserAvatar={userAvatar}
                />
                {
                  comments.map(comment =>
                    comment.post === post.id &&
                    < Comment
                      key={`${comment.id}-${comment.post}`}
                      id={comment.id}
                      postNumber={comment.post}
                      avatar={comment.avatar}
                      name={comment.name}
                      post={comment.content}
                      date={comment.date}
                      image={comment.image}
                      liked={comment.liked}
                      feed={comment.feed}
                    />
                  )
                }
              </Publication>
            )
            :
            posts.map(post =>
              <Publication
                key={post.id}
                id={post.id}
                avatar={post.avatar}
                name={post.name}
                post={post.content}
                date={post.date}
                image={post.image}
                liked={post.liked}
                feed={post.feed}
                length={comments.filter(e => e.post === post.id)}
              >
                <NewComment
                  id={post.id}
                  onImageChange={handleCommentImageUpload}
                  post={userCommentPost}
                  onChange={handleNewCommentPost}
                  onClick={handleCommentSubmit}
                  propUserAvatar={userAvatar}
                />
                {
                  comments.map(comment =>
                    comment.post === post.id &&
                    < Comment
                      key={`${comment.id}-${comment.post}`}
                      id={comment.id}
                      postNumber={comment.post}
                      avatar={comment.avatar}
                      name={comment.name}
                      post={comment.content}
                      date={comment.date}
                      image={comment.image}
                      liked={comment.liked}
                      feed={comment.feed}
                    />
                  )
                }
              </Publication>
            )
        }
      </Box>
    </>
  )
}