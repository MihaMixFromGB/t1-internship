import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '@/app/store';
import { productMocks } from '@/shared/api';
import { useCatalog } from './catalog.hooks';

function Wrapper(props: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <MemoryRouter>{props.children}</MemoryRouter>
    </Provider>
  );
}

const { products } = productMocks;

describe('hooks of the catalog', () => {
  beforeAll(() => {
    fetchMock.mockResponse(req => {
      if (/\/products\?\S+skip=0/.test(req.url)) {
        return Promise.resolve({
          status: 200,
          body: JSON.stringify({
            products,
          }),
        });
      }
      return Promise.reject('bad url');
    });
  });

  it('get first nine products', async () => {
    const { result } = renderHook(() => useCatalog(), {
      wrapper: Wrapper,
    });
    await waitFor(() => expect(result.current.products).toHaveLength(0));
    await waitFor(() =>
      expect(result.current.products).toHaveLength(products.length),
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
