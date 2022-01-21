// import { PureComponent } from 'react';
// import { ListItem, Img } from './ImageGalleryItemsStyled';

import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ src, alt, onClick, id }) {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => {
        onClick(src, alt, id);
      }}
    >
      <img src={src} alt={alt} className={s.ImageGalleryItemImage} id={id} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  dataId: PropTypes.number,
};
