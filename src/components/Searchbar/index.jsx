import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {IoSearch , IoClose} from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook'
import MoonLoader from "react-spinners/MoonLoader";
import { useDebounce } from '../../hooks/debounceHook';
import axios from 'axios';
import {LinkD} from '../links'
import Link from 'react-scroll/modules/components/Link';
import logoLink from "../../images/mainLogo.png"

const SearchBarContanier = styled(motion.div)`
display:flex ;
flex-direction: column ;
width: 75em;
height: 3.8em;
background-color: #fff;
border-radius: 6px;
box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
overflow-y:auto ;

`;

const SearchInputContanier = styled.div`

width: 100%;
min-height: 4em;
display: flex;
align-items: center;
position: relative;
padding: 2px 15px;



`;

const SearchInput = styled.input`

width: 100%;
height: 100%;
outline: none;
border: none;
font-size: 12px;
color: #ecc203;
font-weight: 500;
border-radius: 6px;
background-color: transparent;

&:focus {
    outline: none;
    &::placeholder {
    opacity: 0;
}
}

&::placeholder {
    color: #ecc203;
    transition: all 250ms ease-in-out;
}

@media screen and (max-width: 768px) {
        
        font-size: 8px;
    }

`;

const SearchIcon = styled.span`


color:#ecc203 ;
font-size: 27px;
margin-right: 10px;
margin-top: 6px;
vertical-align: middle;

@media screen and (max-width: 768px) {
        
        font-size: 18px;
    }

`;

const CloseIcon = styled(motion.span)`
color:#ecc203 ;
font-size: 23px;
margin-right: 6px;
margin-top: 6px;
vertical-align: middle;
transition: all 200ms ease-in-out;
cursor: pointer;

&:hover {
    color: #dfdfdf;
}
`;

const LineSeperator = styled.span`
    display: flex;
    min-height: 2px;
    min-width: 100%;
    background-color: #d8d8d878;

`;

const SearchContent = styled.div`

    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1em;

`;

const LoadingWrapper = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const LinkContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;
  img {
    width: auto;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
        height: 30px;
        width: 30px;
    }
`;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;

  @media screen and (max-width: 768px) {
    margin-left: 1px;
        font-size: 9.3px;
    }

`;

const Status = styled.span`
  color: #ecc203;
  font-size: 18px;
  display: flex;
  flex: 0.2;

  @media screen and (max-width: 768px) {
        font-size: 10px;
    }


`;

const ContanierVariants = {
    expanded: {
        height: "20em",
    },
    collapsed: {
        height: "3.8em",
    }
};

const contanierTransition = { type: 'spring' , damping: 22 , stiffness: 150}


export function SearchBar(props) {

    const [isExpanded , setExpanded] = useState(false);
    const [parentRef , isClickOutside] = useClickOutside();
    const inputRef = useRef();
    const [searchQuery , setSearchQuery] = useState("")
    const [isLoading , setLoading] = useState(false);

    const [linkData , setLinkData] = useState([]);
    const [filteredlinkData , setFilteredLinkData] = useState([]);
    const [noLink, setNoLink] = useState(false);

    // const [q , setQ] = useState("");

    const isEmpty = !linkData || linkData.length === 0;

    const changeHandler = (e) => {
        e.preventDefault();
        if (e.target.value.trim() === "") setNoLink(false);

        setSearchQuery(e.target.value);
    }

    const expandContanier = () => {
        setExpanded(true)
    };

    const collapseContanier = () => {
        setExpanded(false)
        setSearchQuery("");
        setLoading(false);
        setNoLink(false);
        setLinkData([]);
        if(inputRef.current) inputRef.current.value = "";
    };

    useEffect( () => {

        if(isClickOutside) collapseContanier();

    }, [isClickOutside]  );

   

    const prepareSearchQuery = (query) =>{
        const url = `http://185.26.144.173:8000/link/getid/${query}`;
        // const url = `http://api.tvmaze.com/search/shows?q=${query}`;
        // const url = `http://localhost:8000/link/get`;
        //Attention ! link maintence

        return encodeURI(url);


    }
   

   const searchLinks = async () => {
    
    const strTrim = searchQuery.trim();
    const strmodifiyeli = strTrim.replaceAll("\n","")
    
    console.log("str: " + strmodifiyeli)
    
    const strArray = strmodifiyeli.split(/(pinksale\.finance\/).\/(launchpad)\/(0x[a-fA-F0-9]{40})/gi)
    // (/(pinksale\.finance\/).\/(launchpad)\/(0x[a-fA-F0-9]{40})/gi)
    // new RegExp(/(#|\/)(check){1}.*(pinksale\.finance\/).{1}\/(launchpad)\/(0x[a-fA-F0-9]{40})/gi)
    
    
    for (let index = 0; index < strArray.length; index++) {
      console.log(index +"değerler: " + strArray[index])
    }
      
      
    

    if(!searchQuery || searchQuery.trim() === "" )
    return

    setLoading(true);
    setNoLink(false);

    const searchQuerySpliting = strArray[3]

    const URL = prepareSearchQuery(searchQuerySpliting);

    const response = await axios.get(URL).catch((err) => {
        console.log("Error: ", err);
      });

    if(response) {
        console.log("Response" , response.data)
        if (response.data && response.data.length === 0) setNoLink(true);

        setLinkData(response.data)
    }

    setLoading(false);
   
    // {linkData.map(({ link }) => (
        
    //    console.log("key:" , link.id)

    // ))}
   
};

   useDebounce(searchQuery , 500 , searchLinks );

   
   console.log("Value:" , searchQuery);

    return(

        // animate={} variants={}
        <SearchBarContanier animate={isExpanded ? "expanded" : "collapsed"} variants={ContanierVariants} ref={parentRef} transition={contanierTransition}>
            <SearchInputContanier>
                <SearchIcon>
                    <IoSearch />
                </SearchIcon>
                <SearchInput placeholder='Search for clean/not clean ...' onFocus={expandContanier} ref={inputRef} value={searchQuery} onChange={changeHandler}  />
                <AnimatePresence>
                {isExpanded && <CloseIcon key="close-icon" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={collapseContanier} transition={{duration: 0.2}}>
                    <IoClose />
                </CloseIcon>}
                </AnimatePresence>
                
            </SearchInputContanier>
            {isExpanded && <LineSeperator />}
            {isExpanded &&<SearchContent> 

                {isLoading && (
            <LoadingWrapper>
              <MoonLoader loading color="#000" size={20} />
            </LoadingWrapper>   
                )}
                {!isLoading && !noLink && isEmpty &&
                <LoadingWrapper>
                    <WarningMessage>Search Link Here</WarningMessage>
                </LoadingWrapper>
                }
                {!isLoading && noLink && 
                <LoadingWrapper>
                    <WarningMessage>Not Found Come Telagram Groups</WarningMessage>
                </LoadingWrapper>
                }
                {!isLoading && !isEmpty && ( <>
                    {linkData.map((value , key) => (
                     <LinkContainer>
                     <Thumbnail>
                       <img src={logoLink} />
                     </Thumbnail>
                     <Name>{value.link}</Name>
                     <Status>{value.linkStatus || "N/A"}</Status>
                   </LinkContainer>
              ))}

{/* {!isLoading && !isEmpty && ( <>
                    {linkData.map(({ link }) => (
                     <LinkD
                     key={link.id}
                    //  thumbanilSrc={link.image && link.image.medium}
                     name={link.link}
                     rating={link.linkStatus}
                     
                />
              ))} */}

                
                </>)}
                {/* {!isLoading && !noLink && isEmpty &&
                <LoadingWrapper>
                    <WarningMessage>Search Link Here</WarningMessage>
                </LoadingWrapper>
                }
                {!isLoading && noLink && 
                <LoadingWrapper>
                    <WarningMessage>Not Found Come Telagram Groups</WarningMessage>
                </LoadingWrapper>
                } */}
                {/* {!isLoading && !isEmpty && (
            <>
              {linkData.map(({ show }) => (
                <LinkD
                  key={show.id}
                  thumbanilSrc={show.image && show.image.medium}
                  name={show.name}
                  rating={show.rating && show.rating.average}
                />
              ))}
            </>
          )} */}
            </SearchContent>}
            
               
        </SearchBarContanier>

    )

}