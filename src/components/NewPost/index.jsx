import { Container, Avatar, Box, Buttons, Input, Image, TextField2 } from "./style";
import { FiSend, FiImage } from "react-icons/fi"
import { useEffect, useState } from "react";

import placeholderImage from '../../assets/placeholder_image.jpeg'

export const NewPost = ({ propUserAvatar, post, onChange, onClick, onImageChange, login }) => {
  const [userAvatar, setUserAvatar] = useState(propUserAvatar)
  const [userPost, setUserPost] = useState(post)
  const [image, setImage] = useState(null)

  const handleInputChange = (e) => {
    const { value } = e.target
    setUserPost(value)
    onChange(value)
  }

  const handleSubmit = () => {
    const divided = userPost.split('\n')
    if (!divided.every(e => e === '') || image) {
      onClick()
      setUserPost('')
      setImage(null)
    }
  }

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0]
    setImage(selectedFile)
    onImageChange(selectedFile)
  }

  const handleLogin = () => {
    login()
  }

  useEffect(() => {
    setUserAvatar(propUserAvatar)
  }, [propUserAvatar])

  return (
    <Container>
      <Avatar onClick={handleLogin} src={userAvatar ? URL.createObjectURL(userAvatar) : placeholderImage} alt="Foto de perfil" />
      <Box>
        <TextField2
          value={userPost}
          post={userPost}
          onChange={handleInputChange}
          maxRows={10}
          placeholder="No que está pensando?"
          fullWidth
          className="input"
          multiline
          variant="outlined" />
        {
          image &&
          <Image src={URL.createObjectURL(image)} alt="" />
        }
        <Buttons>
          <label htmlFor="upload-image">
            <FiImage />
          </label>
          <FiSend onClick={handleSubmit} />
        </Buttons>
      </Box>
      <Input id="upload-image" onChange={handleImageUpload} type="file" accept="image/png, image/jpeg" />
    </Container>
  )
}