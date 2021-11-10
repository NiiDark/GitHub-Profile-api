import React, { useState } from 'react';
import { FormContainer, FormInput, FormIcon, FormBtn } from './Form.styles';

function Form({ getSearchValue, isDarkMode }) {
   const [search, setsearch] = useState('');

   const handleSubmite = (e) => {
      e.preventDefault();
      getSearchValue(search);
      setsearch('');
   };
   return (
      <FormContainer isDarkMode={isDarkMode} onSubmit={(e) => handleSubmite(e)}>
         <FormIcon>
            <img src="/search.svg" alt="search" />
         </FormIcon>
         <FormInput
            isDarkMode={isDarkMode}
            type="text"
            placeholder="Search GitHub username..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
         />
         <FormBtn>Search</FormBtn>
      </FormContainer>
   );
}

export default Form;
