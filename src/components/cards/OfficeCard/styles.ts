import styled from 'styled-components/macro';

const Container = styled.div`
    display:flex;
    width: 342px;
    height: fit-content;
    background: #FFFFFF;
    border: 1px solid #E8F3FC;
    border-radius: 8px;
    &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    margin:10px 0px;
`;
const ColorContainer = styled.div`
    width: 12px;
    background: black;
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

const EditButton = styled.button`
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

const MemberCountContainer = styled.div`
    display:flex;
    margin: 10px 0px;
    .member-count {
        margin: 0px 5px;
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
        margin: 0px 5px;
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
