import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/home-page';
import { Layout } from '@/pages/layouts';
import { paths } from '@/shared/model';

export const Router = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.forStaff} element={<Layout>For staff only</Layout>} />
      <Route
        path={paths.product()}
        element={<Layout>A product's description</Layout>}
      />
    </Routes>
  );
};
