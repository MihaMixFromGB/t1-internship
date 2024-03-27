import { ProductList } from '@/entities/product';
import { Paragraph, Preloader } from '@/shared/ui';
import { useTopProducts } from '../quiz.hooks';
import css from './quiz.module.css';

export const QuizResponse: React.FC = () => {
  const { products, isFetching } = useTopProducts();
  return (
    <Preloader isFetching={isFetching}>
      {!products.length ? (
        <Paragraph>Oops... something went wrong, please try later</Paragraph>
      ) : (
        <ProductList className={css.quiz__answer} products={products} />
      )}
    </Preloader>
  );
};
