import { useState } from 'react'
import { Screen, Container, Form, Avatar, FormGroup } from './style'
import { TextField, Button } from '@mui/material'
import { FiCamera } from 'react-icons/fi'
import placeholderImage from '../../assets/placeholder_image.jpeg'

export const Login = ({ login }) => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    login(name, avatar)
  }

  return (
    <Screen>
      <Container>
        <h2>Registre-se</h2>
        <Form onSubmit={handleSubmit}>
          <Avatar htmlFor='avatar'>
            <img src={avatar ? URL.createObjectURL(avatar) : placeholderImage} alt="Foto do perfil do usuário" />
            <input type="file" id="avatar" name='avatar' accept='image/png, image/jpeg' onChange={e => setAvatar(e.target.files[0])} />
            <div>
              <FiCamera color='#fff' size={20} />
            </div>
          </Avatar>
          <FormGroup>
            <TextField value={name} required id="outlined-basic" label="Nome" variant="outlined" onChange={(e) => setName(e.target.value)} />
          </FormGroup>
          <Button type='submit' variant="contained">Registrar</Button>
        </Form>
      </Container>
    </Screen>
  )
}