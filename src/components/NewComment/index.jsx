import { Container, Avatar, Box, Buttons, Input, Image, TextField2 } from "./style";
import { FiSend, FiImage } from "react-icons/fi"
import { useEffect, useState } from "react";

import placeholderImage from '../../assets/placeholder_image.jpeg'

export const NewComment = ({ propUserAvatar, post, onChange, onClick, id, onImageChange }) => {
  const [userAvatar, setUserAvatar] = useState(propUserAvatar)
  const [userCommentPost, setUserCommentPost] = useState(post)
  const [imageComment, setImageComment] = useState(null)

  const handleInputChange = (e) => {
    const { value } = e.target
    setUserCommentPost(value)
    onChange(value)
  }

  const handleCommentSubmit = () => {
    const divided = userCommentPost.split('\n')
    if (!divided.every(e => e === '') || imageComment) {
      onClick(id)
      setUserCommentPost('')
      setImageComment(null)
    }
  }

  const handleImageUpload = (e) => {
    const fileSelected = e.target.files[0]
    setImageComment(fileSelected)
    onImageChange(fileSelected)
  }

  useEffect(() => {
    setUserAvatar(propUserAvatar)
  }, [propUserAvatar])

  return (
    <Container>
      <Avatar src={userAvatar ? URL.createObjectURL(userAvatar) : placeholderImage} alt="Foto de perfil" />
      <Box>
        <TextField2
          value={userCommentPost}
          post={userCommentPost}
          onChange={handleInputChange}
          maxRows={10}
          placeholder="Deixe sua resposta..."
          fullWidth
          className="input"
          multiline
          variant="outlined" />
        {imageComment &&
          <Image src={URL.createObjectURL(imageComment)} alt="Imagem do comentário" />
        }
        <Buttons>
          <label htmlFor="upload-commentimage">
            <FiImage />
          </label>
          <FiSend onClick={handleCommentSubmit} />
        </Buttons>
      </Box>
      <Input id="upload-commentimage" onChange={handleImageUpload} type="file" accept="image/png, image/jpeg" />
    </Container>
  )
}