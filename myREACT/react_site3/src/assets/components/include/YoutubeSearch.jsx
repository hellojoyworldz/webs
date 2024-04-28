import React, { useRef } from "react";

const YoutubeSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value === "") {
      alert("검색어를 입력해주세요");
    } else {
      onSearch(value);
    }

    console.log(onSearch(value));
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="movie__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="keywords"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          🔍
        </button>
      </div>
    </div>
  );
};

export default YoutubeSearch;
