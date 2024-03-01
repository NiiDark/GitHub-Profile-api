import { useState } from "react";
import { FormContainer, FormInput, FormIcon, FormBtn } from "./Form.styles";

function Form({ getSearchValue, isDarkMode }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchValue(search);
    setSearch("");
  };
  return (
    <FormContainer isDarkMode={isDarkMode} onSubmit={(e) => handleSubmit(e)}>
      <FormIcon>
        <img src="/search.svg" alt="search" />
      </FormIcon>
      <FormInput
        isDarkMode={isDarkMode}
        type="text"
        placeholder="Search GitHub username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormBtn>Search</FormBtn>
    </FormContainer>
  );
}

export default Form;
