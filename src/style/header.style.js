import styled from 'styled-components'


export const HeaderContainer = styled.div`
width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 99;
    padding: 0px 20px;
`

export const Nav = styled.section`
         display: flex;
         gap: 2.5rem;
         text-transform: uppercase;
        font-size: 13px!important;
        font-weight: 700;
        padding: 0px 10px;

        @media (max-width: 810px) {
                display: none;
        }   
`

export const Profile = styled.section`
        display: flex;
        align-items: center;
        gap: 1.5rem;
        text-transform: uppercase;
        font-size: 13px!important;
        font-weight: 700;
        padding-right: 20px; 
`

export const Close = styled.div`
        display: flex;
        margin: 10px;
        justify-content: flex-end;
        cursor: pointer;

`
export const Sidebar = styled.div`
width: 300px;
height: 100vh;
        background: whitesmoke;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 20px;

        li{
                padding: 15px 0px;
                border-bottom: 1px solid rgba(0,0,0,0.2);
                
                a{
                        text-transform: capitalize; 
                           font-weight: 700;
                }
        }
`


export default HeaderContainer