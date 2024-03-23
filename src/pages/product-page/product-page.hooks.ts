import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/entities/product';

export const useProduct = () => {
  const { productId } = useParams();
  const id = productId ? parseInt(productId) : NaN;

  return useGetProductQuery(isNaN(id) ? skipToken : id);
};
