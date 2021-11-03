import React, { useState } from 'react'
import HeaderContainer from '../style/header.style'
import { Nav, Profile, Sidebar, Close} from '../style/header.style'
import { MdLineWeight, MdShuffle } from "react-icons/md";
import { LeftBtn } from '../style/model.style'
import Fade from 'react-reveal/Fade'
const user = null

function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <HeaderContainer>
      <img src="/images/logo.svg" alt="logo-pic" />
      {
        user ?  <Nav>
        <a href="modelS"><h2>model s</h2></a>
        <a href="model3"><h2>model 3</h2></a>
         <a href="modelY"><h2>model y</h2></a>
        <a href="modelX"><h2>model x</h2></a>
    </Nav>
      : null
      }
      {
        user ?   <Profile>
        <a href="#"><h2>shop</h2></a>
        <a href=""><h3>show profile</h3></a>
        <a href="#" onClick={() => setToggle(true)}><MdLineWeight size='35px' /></a>
      </Profile>
        : <LeftBtn>SignUp</LeftBtn>
      }
      {
        toggle &&
        
      <Sidebar>
        <Fade right>
        <Close>
            <MdShuffle size='30px' onClick={() => setToggle(false)}/>
        </Close>
        <li><a href="modelS">existing inventory</a></li>
        <li><a href="model3">used inventory</a></li>
        <li><a href="modelX">trade-in</a></li>
        <li><a href="modelY">cybertruck</a></li>
        <li><a href="#">roadastar</a></li>
        <li><a href="#">existing inventory</a></li>
        <li><a href="#">used inventory</a></li>
        <li><a href="#">trade-in</a></li>
        <li><a href="#">cybertruck</a></li>
        <li><a href="#">roadastar</a></li>
        </Fade>
      </Sidebar>
      
}
    </HeaderContainer>
  )
}

export default Header
