import styled from 'styled-components'




const ModelContainer = styled.div`
    width: 100ww;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-image: ${props => `url('/images/${props.bg}')`};
    position: relative;
`

export const Text = styled.div`
        padding-top: 15vh;
        text-align: center;
        line-height: 1.5;

        h1{
                font-weight: 700;
                font-family: 'open-sans', monospace, sans-serif;      
        }
        p{
                font-size: 15px!impotant;
                text-transform: capitalize;
                font-weight: 400;
        }
`

export const BtnContainer = styled.div`

display: flex;
flex-wrap: wrap;
margin-bottom: 30px;
@media (max-width: 767px) {
      flex-direction: column; 
}
`
export const LeftBtn = styled.div`
    background: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 10px;
`
export const RigthBtn = styled(LeftBtn)`
    background: whitesmoke;
    opacity: 0.65;
    color: black;
`


export const Arrow = styled.img`
margin-top: 20px;
height: 40px;
transition: 5s;
animation: move infinite 1.5s;
overflow: hidden;


@keyframes move {
    0%, 20%, 50%, 80%, 100%{
        transform: translateY(0);
    }
    40%{
        transform: translateY(5px);
        
    }
    60%{
        transform: translateY(3px);
    }
}
`
export const Wrap = styled.div``


export default ModelContainer