import React from 'react'
import HomeContainer from '../style/home.style'
import Model from './Model'
import '../App.css'

function Home() {
    return (
        <HomeContainer>
         <Model 
            title='MODEL S'
            desc='order online for touchless delivery'
            leftBtn='custom order'
            rightBtn='exiting inventory'
            bgImg='model-s.jpg'
            arrowImg='down-arrow.svg'
            id='modelS'
         />
         <Model 
            title='MODEL Y'
            desc='order online for touchless delivery'
            leftBtn='custom order'
            rightBtn='exiting inventory'
            bgImg='model-y.jpg'
            id='modelY'
         />
         <Model 
            title='MODEL 3'
            desc='order online for touchless delivery'
            leftBtn='custom order'
            rightBtn='exiting inventory'
            bgImg='model-3.jpg'
            id='model3'
         />
         <Model 
            title='MODEL Y'
            desc='order online for touchless delivery'
            leftBtn='custom order'
            rightBtn='exiting inventory'
            bgImg='model-x.jpg'
            id='modelY'
  
         />
         <Model 
            title="Lowest Cost Solar Panels In America'"
            desc='money-back guarantee'
            leftBtn='order now'
            rightBtn='learn more'
            bgImg='solar-panel.jpg'
         />
         <Model 
            title='Solor For New Roofs'
            desc='solor roof cost less than a new roof plus solor panels'
            leftBtn='order now'
            rightBtn='learn more'
            bgImg='solar-roof.jpg'
         />
         <Model 
            title='Accessories'
            // desc='solor roof cost less than a new roof plus solor panels'
            leftBtn='show now'
            // rightBtn='learn more'
            bgImg='accessories.jpg'
         />
        </HomeContainer>
    )
}

export default Home
