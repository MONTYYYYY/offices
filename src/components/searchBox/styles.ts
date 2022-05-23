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
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1E293B;

    ::placeholder,  :-ms-input-placeholder,  ::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-size: 16px;
      line-height: 24px;
      color: #1E293B !important;
    }


`;

const SearchBoxStyles = {
  Container,
  SearchInput,
};

export default SearchBoxStyles;
