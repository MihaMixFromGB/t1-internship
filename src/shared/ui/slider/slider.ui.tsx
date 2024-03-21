import clsx from 'clsx';
import { useState } from 'react';
import css from './slider.module.css';
import { SliderProps } from './slider.types';

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className={css.slider}>
      <img
        className={css.slider__thumbnail}
        src={images[activeIdx]}
        width={520}
        height={460}
      />
      <div className={css.slider__gallery}>
        {images.map((src, idx) => (
          <GalleryItem
            key={idx}
            src={src}
            active={idx === activeIdx}
            toggle={() => setActiveIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};

type GalleryItemProps = {
  src: string;
  active: boolean;
  toggle: () => void;
};
const GalleryItem: React.FC<GalleryItemProps> = ({ src, active, toggle }) => {
  const classes = clsx(css.slider__gallery__img, {
    [css.active]: active,
  });

  return (
    <label className='input-hidden'>
      <img className={classes} src={src} width={70} />
      <input type='radio' name='slider' onChange={toggle}></input>
    </label>
  );
};
