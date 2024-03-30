import { render, screen, waitFor } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getWrapperForTest } from '@/app/app.lib';
import { ProductPage } from '@/pages/product-page';

const notification = 'Bad Request';

describe('notifications by api errors', () => {
  beforeAll(() => {
    fetchMock.mockResponseOnce(notification, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      status: 400,
      statusText: 'Bad Request',
    });
  });

  afterEach(() => {
    fetchMock.mockClear();
  });

  it('bad request', async () => {
    const Wrapper = getWrapperForTest('/products/1');
    render(
      <>
        <ToastContainer />
        <Routes>
          <Route element={<ProductPage />} path='/products/:productId'></Route>
        </Routes>
      </>,
      { wrapper: Wrapper },
    );
    await waitFor(() =>
      expect(screen.getByText(notification)).toBeInTheDocument(),
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
