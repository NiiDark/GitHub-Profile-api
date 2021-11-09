import styled from 'styled-components';

// .parent {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     grid-template-rows: repeat(12, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }

//     .div6 { grid-area: 10 / 5 / 13 / 13; }

export const Container = styled.main`
   border-radius: 10px;
   width: 96%;
   max-width: 800px;
   height: 450px;
   background-color: rgba(31, 42, 72, 1);
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: repeat(12, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;
`;

export const Avatar = styled.div`
   grid-area: 1 / 1 / 7 / 5;
   padding: 2rem 0 0 2rem;

   img {
      width: 60%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 100%;
      box-shadow: 0px 2px 21px 3px rgba(0, 0, 0, 0.5);
   }
`;

export const Name = styled.div`
   grid-area: 1 / 5 / 4 / 13;
   padding: 2rem 0 0 0;
   .wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 0.5rem 0;

      h2 {
         color: white;
         font-size: 1.5rem;
         font-weight: 600;
         margin: 0;
      }

      h3 {
         color: white;
         opacity: 0.6;
         font-size: 1rem;
         font-weight: 400;
         margin: 0 2rem 0 0;
      }
   }
   a {
      margin: 0;
      text-decoration: none;
      font-size: 1.1rem;
      color: rgba(2, 120, 251, 1);
   }
`;

export const Bio = styled.div`
   grid-area: 4 / 5 / 7 / 13;
   background-color: yellow;
`;

export const Statistics = styled.div`
   grid-area: 7 / 5 / 10 / 13;
   background-color: blue;
`;

export const More = styled.div`
   grid-area: 10 / 5 / 13 / 13;
   background-color: pink;
`;

export const UserNotFound = styled.div`
   margin: 0;
   grid-area: 1 / 1 / 13 / 13;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;

   h2 {
      font-size: 2.5rem;
   }
`;
