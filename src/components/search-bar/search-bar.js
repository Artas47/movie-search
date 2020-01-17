import React, { useState } from "react";
import * as Styled from "./search-bar.styles";
import { useStateValue } from "../../context/state";
import axios from "axios";

const SearchBar = () => {
  const [state, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmitHandler = async e => {
    e.preventDefault();
    const response = await axios.get(
      `http://www.omdbapi.com/?s="${searchTerm}"&apikey=c6f9646d`
    );
    dispatch({ type: "SEARCH_MOVIES", movies: response.data });
  };

  const onChangeHandler = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <Styled.Form onSubmit={onSubmitHandler}>
      <Styled.Input
        type="text"
        onChange={onChangeHandler}
        placeholder="Look for movies"
      />
    </Styled.Form>
  );
};

export default SearchBar;
