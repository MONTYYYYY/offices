import React, { useState } from 'react';
import SearchBoxStyles from './styles';

interface ISearchBox {
  setSearchParentText : React.Dispatch<React.SetStateAction<string>>
}
function SearchBox({ setSearchParentText }: ISearchBox) {
  const [searchText, setSearchText] = useState('');
  const handleTextChange = (e : any) => {
    const { value } = e.target;
    setSearchText(value);
    setSearchParentText(value);
  };
  return (
    <SearchBoxStyles.Container>
      <SearchBoxStyles.SearchInput
        ref={(ref) => ref && ref.focus()}
        name="searchBox"
        placeholder="Search"
        value={searchText}
        onChange={(e:any) => handleTextChange(e)}
      />
    </SearchBoxStyles.Container>
  );
}

export default SearchBox;
