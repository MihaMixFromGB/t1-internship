import css from './preloader.module.css';
import { PreloaderProps } from './types';

export const Preloader: React.FC<PreloaderProps> = ({
  children,
  isFetching,
}) => {
  return isFetching ? (
    <div className={css.container}>
      <div className={css.loader}>Loading...</div>
    </div>
  ) : (
    children
  );
};
