import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import {
   Container,
   Avatar,
   Statistics,
   Name,
   Bio,
   More,
   UserNotFound,
} from './GitHubInfo.styles';

function GitHubInfo() {
   const [searchValue, setSearchValue] = useState('');
   const [userInfo, setUserInfo] = useState({});
   const [notFound, setNotFound] = useState(true);
   const getSearchValue = (value) => {
      setSearchValue(value);
   };

   console.log(userInfo.avatar_url);

   useEffect(() => {
      const API = `https://api.github.com/users/${searchValue}`;
      if (searchValue !== '') {
         axios
            .get(API)
            .then((response) => {
               setUserInfo({ ...response.data });
               setNotFound(false);
            })
            .catch((err) => {
               setNotFound(true);
            });
      }
   }, [searchValue]);
   const { avatar_url, name, login, html_url, created_at, bio } = userInfo;
   const ProfileBio = bio || 'This profile has no bio';
   const joinDate = new Date(created_at);
   return (
      <>
         <Form getSearchValue={getSearchValue} />
         <Container>
            {notFound ? (
               <UserNotFound>
                  <h2>User Not Found :/</h2>
               </UserNotFound>
            ) : (
               <>
                  {' '}
                  <Avatar>
                     <img src={avatar_url} alt="avatar" />
                  </Avatar>
                  <Name>
                     <div className="wrapper">
                        {' '}
                        <h2>{name}</h2>
                        <h3>Joined {joinDate.toString().slice(4, 15)}</h3>
                     </div>
                     <a href={html_url} target="_blank" rel="noreferrer">
                        @{login}
                     </a>
                  </Name>
                  <Bio>{ProfileBio}</Bio>
                  <Statistics></Statistics>
                  <More></More>
               </>
            )}
         </Container>
      </>
   );
}

export default GitHubInfo;
