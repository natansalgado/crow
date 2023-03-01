import { HeaderContainer, Label } from './style'
import { BiSearch } from 'react-icons/bi'
import { GiBirdTwitter } from 'react-icons/gi'

export const Header = (props) => {
  return (
    <HeaderContainer>
      <GiBirdTwitter size={40} />
      <Label htmlFor="input">
        <BiSearch color='#333' />
        {props.children}
      </Label>
    </HeaderContainer>
  )
}