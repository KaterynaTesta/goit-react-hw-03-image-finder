import React from 'react';
import { LoadMore } from './ButtonStyled';
import PropTypes from 'prop-types';

export default function Button({ onLoadMore }) {
  return (
    <LoadMore type="button" onClick={onLoadMore}>
      Load more
    </LoadMore>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
