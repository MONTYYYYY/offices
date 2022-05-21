import React from 'react';
import PlainStyles from './styles';

interface IPlainProps {
  component: React.FunctionComponent;
}
function Plain({ component: Component }:IPlainProps) {
  return (
    <PlainStyles.Body>
      <Component />
    </PlainStyles.Body>
  );
}

export default Plain;
