import { Route, Routes } from 'react-router-dom';
import { Admin } from '@/pages/admin';
import { HomePage } from '@/pages/home-page';
import { Layout } from '@/pages/layouts';
import { ProductPage } from '@/pages/product-page';
import { paths } from '@/shared/model';

export const Router = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route
        path={paths.forStaff}
        element={
          <Layout>
            <Admin />
          </Layout>
        }
      />
      <Route
        path={paths.product()}
        element={
          <Layout>
            <ProductPage />
          </Layout>
        }
      />
    </Routes>
  );
};
