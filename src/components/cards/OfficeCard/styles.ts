import styled from 'styled-components/macro';
import SCREEN_SIZES from '../../../constants/MediaQueries';

const Container = styled.div`
    display:flex;
    width: 342px;
    height: fit-content;
    background: #FFFFFF;
    border: 1px solid #E8F3FC;
    border-radius: 8px;
    margin:10px 0px;

    @media (min-width: ${SCREEN_SIZES.LAPTOP_MIN}px){
      margin:20px;
    }
`;
interface IColorContainerProps {
    background?: string;
}

const ColorContainer = styled.div<IColorContainerProps>`
    width: 12px;
    background: ${(props) => props.background || 'black'};
    border-radius: 8px 0px 0px 8px;
`;
const ContentContainer = styled.div`
    width: 100%;
    padding:15px;
    background: #FFFFFF;
    border-radius: 0px 8px 8px 0px;
`;
const ContentHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const CompanyName = styled.b`
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-transform: capitalize;
`;

export const EditButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
`;

const ContentBottomContainer = styled.div`
    width: 100%;
`;

const MemberCountContainer = styled.button`
    display:flex;
    background:none;
    border:none;
    margin: 10px 0px;
    width: 100%;
    :hover {
      background : rgb(72, 73, 84, 0.1);
    }
    .member-count {
        margin: 0px 5px;
    }
    * {
       cursor: pointer;
    }
`;

const HorizontalLine = styled.hr`
    border: 0.4px solid #0D4477;
`;
const MoreButtonContainer = styled.div`
    margin: 10px 0px;
    width: 100%;
    .rotated-arrow {
        transform: matrix(1, 0, 0, -1, 0, 0);
    }
    label {
        margin-right: 5px;
    }
`;

const MoreContentContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
`;
const MoreContentItemContainer = styled.div`
    display:flex;
    margin: 8px 0px;
    .content-item-icon {
        margin: 0px 10px;
    }
`;
const OfficeCardStyles = {
  ColorContainer,
  ContentHeaderContainer,
  ContentBottomContainer,
  ContentContainer,
  EditButton,
  Container,
  CompanyName,
  MemberCountContainer,
  HorizontalLine,
  MoreButtonContainer,
  MoreContentContainer,
  MoreContentItemContainer,
};

export default OfficeCardStyles;
