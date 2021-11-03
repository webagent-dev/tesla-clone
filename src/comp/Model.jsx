import React from 'react'
import ModelContainer from '../style/model.style'
import { Text, BtnContainer, LeftBtn, RigthBtn, Arrow, Wrap} from '../style/model.style'
import Fade from 'react-reveal/Fade'


function Model({title, desc, leftBtn, rightBtn,bgImg, arrowImg}) {
    return (
        <ModelContainer bg={bgImg}>
            <Fade buttom>
            <Text>
              { title ? <h1>{title}</h1> : null }
              { desc ? <p>{desc}</p> : null }
            </Text>
            </ Fade>

           
            <Wrap>
            <Fade buttom>
            <BtnContainer>
                {leftBtn ? <LeftBtn>{leftBtn}</LeftBtn>: null}
                {rightBtn ?    <RigthBtn>{rightBtn}</RigthBtn> : null}
            </BtnContainer>
            </Fade>
            
            { arrowImg ? <Arrow  src={`/images/${arrowImg}`} alt='arrow-pic'/> : null}
            
            </Wrap>
            
        </ModelContainer>
    )
}

export default Model
