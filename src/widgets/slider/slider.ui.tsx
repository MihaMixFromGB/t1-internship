import { useState } from 'react';
import css from './slider.module.css';
import { SliderProps } from './slider.types';

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className={css.slider}>
      <img src={images[activeIdx]} width={520} />
      <div className={css.slider__gallery}>
        {images.map((src, idx) => (
          <label key={idx} className='input-hidden'>
            <img
              className={`${css.slider__gallery__img} ${activeIdx === idx ? css.active : ''}`}
              src={src}
              width={70}
            />
            <input
              type='radio'
              name='slider'
              onChange={() => setActiveIdx(idx)}
            ></input>
          </label>
        ))}
      </div>
    </div>
  );
};
