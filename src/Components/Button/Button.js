import { LoadMore } from './ButtonStyled';

import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
