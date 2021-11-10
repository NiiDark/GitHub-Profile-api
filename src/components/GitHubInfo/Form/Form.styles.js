import styled from 'styled-components';

export const FormContainer = styled.form`
   width: 96%;
   margin-bottom: 1.5rem;
   max-width: 800px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${(props) =>
      props.isDarkMode ? 'rgba(31, 42, 72, 1)' : 'rgba(240, 240, 240, 1)'};
   border-radius: 10px;
   min-height: 70px;
`;

export const FormIcon = styled.div`
   width: 5%;
   height: 100%;
   color: #fff;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 0.5rem 0 1rem;
   img {
      width: 25px;
      min-width: 25px;
   }
`;

export const FormInput = styled.input`
   width: 80%;
   height: 80%;
   font-size: 1.1rem;
   font-family: 'Red Hat Mono';
   color: ${(props) => (props.isDarkMode ? '#fff' : '#000')};
   background-color: transparent;
   border: none;
   margin: 0 0.5rem;
   &:focus-visible {
      outline: none;
   }

   &::placeholder {
      color: ${(props) =>
         props.isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
   }
`;

export const FormBtn = styled.button`
   width: 15%;
   min-width: 90px;
   margin: 0 1rem 0 0.5rem;
   font-size: 1.1rem;
   font-family: 'Red Hat Mono';
   padding: 0.8rem;
   color: #fff;
   background-color: rgba(1, 119, 254, 1);
   border: none;
   border-radius: 5px;
   transition: 200ms ease-in;
   &:hover {
      cursor: pointer;
      opacity: 0.9;
   }
`;
