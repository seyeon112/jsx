import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import S from './style';

const Homeicon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faGithub} />
    </div>
  );
};

export default Homeicon;