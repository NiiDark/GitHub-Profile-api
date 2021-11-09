import styled from 'styled-components';

// .parent {
//     display: grid;
//     grid-template-columns: repeat(12, 1fr);
//     grid-template-rows: repeat(12, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }

//     .div6 { grid-area: 10 / 5 / 13 / 13; }

export const Wrapper = styled.main`
   border-radius: 10px;
   width: 96%;
   max-width: 800px;
   background-color: rgba(31, 42, 72, 1);
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Container = styled.div`
   width: 100%;
   padding: 1.75rem;
`;

export const MainInfo = styled.section`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
`;

export const Avatar = styled.div`
   margin-right: 2rem;

   img {
      width: 115px;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 100%;
   }
`;

export const Name = styled.div`
   width: 80%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   .wrapper {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-right: 2rem;

      @media screen and (min-width: 600px) {
         margin-right: 0;
      }

      h2 {
         color: white;
         font-size: 1.5rem;
         font-weight: 600;
         margin: 0.5rem 0;
         opacity: ${(props) => (props.name ? 1 : 0.5)};
      }

      a {
         margin: 0;
         text-decoration: none;
         font-size: 1.1rem;
         color: rgba(2, 120, 251, 1);
      }
   }

   h3 {
      align-self: flex-start;
      color: white;
      opacity: 0.6;
      font-size: 1rem;
      font-weight: 400;
      margin: 0.95rem 0;
   }
`;

export const Bio = styled.p`
   margin-top: 2rem;
   color: rgba(255, 255, 255, 0.6);
`;

export const Statistics = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 0.5rem;
   background-color: rgba(20, 28, 47, 1);
   padding: 1.5rem;
   border-radius: 10px;
   margin-top: 2rem;
`;

export const Repos = styled.div`
   h3 {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0.25rem 0;
   }
   h4 {
      margin: 0.25rem 0;
      color: rgba(255, 255, 255, 1);
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
   }
`;

export const Followers = styled.div`
   h3 {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0.25rem 0;
   }
   h4 {
      margin: 0.25rem 0;
      color: rgba(255, 255, 255, 1);
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
   }
`;

export const Following = styled.div`
   h3 {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.1rem;
      font-weight: 400;
      margin: 0.25rem 0;
   }
   h4 {
      margin: 0.25rem 0;
      color: rgba(255, 255, 255, 1);
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
   }
`;

export const More = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-top: 1.5rem;
   width: 100%;
`;

export const LBWrapper = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
`;

export const TCWrapper = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
`;

export const Location = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: ${(props) => (props.location ? 1 : 0.5)};

   h3 {
      color: #fff;
      font-weight: 300;
      margin: 0.75rem;
   }
   img {
      width: 25px;
   }
`;
export const Blog = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: ${(props) => (props.blog ? 1 : 0.5)};

   h3 {
      color: #fff;
      font-weight: 300;
      margin: 0.75rem;
   }
   img {
      width: 25px;
   }
`;
export const Twitter = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: ${(props) => (props.twitter ? 1 : 0.5)};

   h3 {
      color: #fff;
      font-weight: 300;
      margin: 0.75rem;
   }
   img {
      width: 25px;
   }
`;
export const Company = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   opacity: ${(props) => (props.company ? 1 : 0.5)};

   h3 {
      color: #fff;
      font-weight: 300;
      margin: 0.75rem;
   }
   img {
      width: 25px;
   }
`;

export const Looking = styled.div`
   margin: 0;
   width: 100%;
   height: 150px;
   display: flex;
   align-items: center;
   justify-content: center;

   h2 {
      color: #fff;
      font-size: 1.75rem;
      font-weight: 600;
      text-align: center;
   }
`;

export const UserNotFound = styled.div`
   margin: 0;
   width: 100%;
   height: 150px;
   display: flex;
   align-items: center;
   justify-content: center;

   h2 {
      color: #fff;
      font-size: 1.75rem;
      font-weight: 600;
      text-align: center;
   }
`;
