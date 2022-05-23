import styled from 'styled-components';
import Images from '../../assets';

const Container = styled.div`
`;
const SearchInput = styled.input`
    text-indent:10px;
    width:343px;
    height:40px;
    background-size: 15px;
    background-position: 95% 10px;
    background-repeat: no-repeat;
    background-image: url(${(Images.Search)});
    box-sizing: border-box;
    border: 1px solid #F1F9FF;
    border-radius: 8px;
`;

const SearchBoxStyles = {
  Container,
  SearchInput,
};

export default SearchBoxStyles;
