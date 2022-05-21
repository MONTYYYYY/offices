import React, { useState } from 'react';
import OfficeCardStyles from './styles';
import Images from '../../../assets/index';
import Buttons from '../../common/buttons/index';

interface IOfficeInformation {
    companyName: string;
    staffCount : number;
    email : string;
    phone : string;
    location :string;
    officeCapacity: number;
}
interface IOfficeCardProps {
  data : IOfficeInformation
}

function OfficeCard({ data } :IOfficeCardProps) {
  const [showMoreDetails, setShowMoreDetails] = useState<boolean>(false);

  const toggleDisplayMoreDetails = () => setShowMoreDetails((currentValue) => !currentValue);

  return (
    <OfficeCardStyles.Container>
      <OfficeCardStyles.ColorContainer />
      <OfficeCardStyles.ContentContainer>
        <OfficeCardStyles.ContentHeaderContainer>
          <OfficeCardStyles.CompanyName>
            {data.companyName}
          </OfficeCardStyles.CompanyName>
          <OfficeCardStyles.EditButton>
            <img src={Images.EditPen} alt="Edit Icon" />
          </OfficeCardStyles.EditButton>
        </OfficeCardStyles.ContentHeaderContainer>
        <OfficeCardStyles.ContentBottomContainer>
          <OfficeCardStyles.MemberCountContainer>
            <span className="center-child-items">
              <img src={Images.People} alt="People" />
              <b className="member-count">{data.staffCount}</b>
              <label htmlFor="member-count-text">Staff Members in Office</label>
            </span>
          </OfficeCardStyles.MemberCountContainer>
          <OfficeCardStyles.HorizontalLine />
          <OfficeCardStyles.MoreButtonContainer className="center-child-items">
            <Buttons.TextButton onClick={toggleDisplayMoreDetails}>
              <span className="center-child-items">
                <label>More Info</label>
                <img className={showMoreDetails ? 'rotated-arrow' : ''} src={Images.DownArrow} alt="DownArrow" />
              </span>
            </Buttons.TextButton>
          </OfficeCardStyles.MoreButtonContainer>
          {showMoreDetails && (
          <OfficeCardStyles.MoreContentContainer>
            <OfficeCardStyles.MoreContentItemContainer>
              <span className="center-child-items">
                <img className="content-item-icon" src={Images.Phone} alt="Phone" />
                <label>{data.phone}</label>
              </span>
            </OfficeCardStyles.MoreContentItemContainer>
            <OfficeCardStyles.MoreContentItemContainer>
              <span className="center-child-items">
                <img className="content-item-icon" src={Images.Email} alt="Email" />
                <label>{data.email}</label>
              </span>
            </OfficeCardStyles.MoreContentItemContainer>
            <OfficeCardStyles.MoreContentItemContainer>
              <span className="center-child-items">
                <img className="content-item-icon" src={Images.People} alt="OfficeCapacity" />
                <label>{data.officeCapacity}</label>
              </span>
            </OfficeCardStyles.MoreContentItemContainer>
            <OfficeCardStyles.MoreContentItemContainer>
              <span className="center-child-items">
                <img className="content-item-icon" src={Images.Location} alt="Location" />
                <label>{data.location}</label>
              </span>
            </OfficeCardStyles.MoreContentItemContainer>
          </OfficeCardStyles.MoreContentContainer>
          )}
        </OfficeCardStyles.ContentBottomContainer>
      </OfficeCardStyles.ContentContainer>
    </OfficeCardStyles.Container>
  );
}

export default OfficeCard;
