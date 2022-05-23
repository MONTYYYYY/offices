import styled from 'styled-components/macro';

const Container = styled.div`
    height:100%;
    width:100%;
    overflow:scroll;
    background: #EEF3F6;
    display:flex;
    flex-direction: column;
    padding-top:20px;
    align-items: center;
`;
interface IProfileImageProps {
  width? : number;
  height? : number;
}
const ProfileImage = styled.img<IProfileImageProps>`
    width :${(props) => props.width || '30'}px;
    height :${(props) => props.height || '30'}px;
    margin : 0px 10px;
`;

const StaffMemberCountRow = styled.div`
  display:flex;
  justify-content: space-between;
`;

const SearchBoxContainer = styled.div`
  margin-top: 30px;
`;

const StaffMemberCountTitle = styled.span`
 font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-transform: capitalize;
`;

const StaffMemberCountValue = styled.span`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

const StaffMembersContainer = styled.div`
    width: 342px;
    margin-top: 40px;
`;
const StaffMemberRow = styled.div`
  display: flex;
  justify-content:space-between;
  margin: 10px 0px;
  :hover {
    background : rgb(72, 73, 84, 0.1);
  }
`;

const AvatarAndFullNameContainer = styled.div`
    align-items: center;
    display: flex;
`;

const FullNameContainer = styled.span`

`;
const EditButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;
const OfficeViewStyles = {
  Container,
  StaffMembersContainer,
  StaffMemberCountRow,
  StaffMemberCountTitle,
  StaffMemberCountValue,
  SearchBoxContainer,
  StaffMemberRow,
  ProfileImage,
  AvatarAndFullNameContainer,
  FullNameContainer,
  EditButtonContainer,
};

export default OfficeViewStyles;
