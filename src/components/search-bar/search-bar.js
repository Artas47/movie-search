import React, { useState } from "react";
import * as Styled from "./search-bar.styles";
import { useStateValue } from "../../context/state";
import axios from "axios";

const SearchBar = () => {
  const [state, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmitHandler = async e => {
    e.preventDefault();
    dispatch({ type: "SEARCH_TERM_CHANGE", searchTerm: searchTerm });
    dispatch({ type: "SEARCH_MOVIES_START" });
    const response = await axios.get(
      `https://www.omdbapi.com/?s="${searchTerm.trim()}"&apikey=c6f9646d`
    );
    dispatch({ type: "SEARCH_MOVIES_SUCCESS", movies: response.data.Search });
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
