import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';

import { Wrapper } from './styles';

export default function DefaultLayount({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayount.propTypes = {
  children: PropTypes.element.isRequired,
};
