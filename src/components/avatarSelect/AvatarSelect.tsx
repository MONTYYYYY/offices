import React, { useState } from 'react';
import AvatarSelectStyles from './styles';
import { Avatars } from '../../features/staffSlice';

interface IAvatarSelectProps {
  setSelectedParentAvatar : React.Dispatch<React.SetStateAction<string>>;
  selectedParentAvatar: string;
}
function AvatarSelect({ selectedParentAvatar, setSelectedParentAvatar }:IAvatarSelectProps) {
  const [selectedAvatar, setSelectedAvatar] = useState<string>(selectedParentAvatar);
  const handleAvatarClick = (name: string) => {
    setSelectedAvatar(name);
    setSelectedParentAvatar(name);
  };
  console.log('selectedAvatar', selectedAvatar);
  return (
    <AvatarSelectStyles.Container>
      <AvatarSelectStyles.AvatarsContainer>
        {
        Object.entries(Avatars).map((avatar) => {
          console.log('avatar', avatar);
          const [avatarKey, avatarSrc] = avatar;
          return (
            <AvatarSelectStyles.AvatarButtonOuterContainer key={avatarKey}>
              <AvatarSelectStyles.AvatarButtonContainer onClick={() => handleAvatarClick(avatarKey)}>
                <img className={selectedAvatar === avatarKey ? 'selected' : ''} key={avatarKey} height={32} src={avatarSrc} alt={avatarKey} />
              </AvatarSelectStyles.AvatarButtonContainer>
            </AvatarSelectStyles.AvatarButtonOuterContainer>
          );
        })
      }
      </AvatarSelectStyles.AvatarsContainer>
    </AvatarSelectStyles.Container>
  );
}

export default AvatarSelect;
