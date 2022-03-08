import React from 'react'
import styled from 'styled-components'
import background from "../images/backMain.jpg";

import Navbartwo from '../Navbartwo'
import JSONDATA from "../MOCK_DATA.json"
import { Button } from '../components/ButtonElements'
import MainPage from './mainPage';
import { SearchBar } from '../components/Searchbar';

import logo from '../images/mainLogo.png'
import Footer from '../components/Footer';

const AppWrapper = styled.div`
/* width: 100%;
height: 100%;*/

display: flex;
justify-content: center;
color: #fff ; 
position: absolute;
top: 300px;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;


`;

const ImgWrapper = styled.div`
display: flex;
justify-content: center;
color: #fff ; 
position: absolute;
top: 150px;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`



const MainContanier = styled.div`
        
        background-image: url(${background}) ;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 102vw;
        height: 130vh;
        background-color: transparent(80%) ;

`



function index() {

return (
    <MainContanier>
        <Navbartwo />


        <ImgWrapper>
        <img src={logo} width="100" height="100" />
        </ImgWrapper>
        
        <AppWrapper>
        
            <SearchBar />
        </AppWrapper>

        
        
    </MainContanier>
    
   
)
}

export default index

{/* <div className='search'>
    // {/* <Navbar /> */}
    //     <input type="text" placeholder='Search here  ...'  />
    //     {JSONDATA.map((val, key) => {
    //         return(
            
    //         <div>
    //             <p>{val.first_name}</p>
               

    //             </div>
    //             )
                 
    //     })}

    // </div> */}