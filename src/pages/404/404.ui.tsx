import { paths } from '@/shared/model';
import { Link, Paragraph } from '@/shared/ui';
import css from './404.module.css';

export const Page404: React.FC = () => {
  return (
    <div className={css.container}>
      <img src={'/icons/404.svg'} width={200} alt='Page is not found' />
      <Paragraph className={css.title}>
        We couldn't find your&nbsp;page
      </Paragraph>
      <Paragraph className={css.description}>
        But we still have millions more shopping items for&nbsp;you to browse.
      </Paragraph>
      <Link className={css.link} variant='button' href={paths.home}>
        Keep shopping
      </Link>
    </div>
  );
};
