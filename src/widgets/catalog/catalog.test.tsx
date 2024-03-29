import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '@/app/store';
import { productMocks } from '@/shared/api';
import { useCatalog } from './catalog.hooks';

function getWrapper(path: string) {
  return (props: { children: ReactNode }) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>{props.children}</MemoryRouter>
    </Provider>
  );
}

const { products, smartphones, searchMac } = productMocks;

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
      } else if (/\/products\/category\/smartphones\?\S+skip=0/.test(req.url)) {
        return Promise.resolve({
          status: 200,
          body: JSON.stringify({
            products: smartphones,
          }),
        });
      } else if (/\/products\/search\?q=Mac/.test(req.url)) {
        return Promise.resolve({
          status: 200,
          body: JSON.stringify({
            products: searchMac,
          }),
        });
      }
      return Promise.reject('bad url');
    });
  });

  beforeEach(() => {
    fetchMock.mockClear();
  });

  it('get first nine products', async () => {
    const Wrapper = getWrapper('');
    const { result } = renderHook(() => useCatalog(), {
      wrapper: Wrapper,
    });
    await waitFor(() => expect(result.current.products).toHaveLength(9));
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('get smartphones', async () => {
    const Wrapper = getWrapper('?category=smartphones');
    const { result } = renderHook(() => useCatalog(), {
      wrapper: Wrapper,
    });
    await waitFor(() => {
      expect(result.current.products).toHaveLength(smartphones.length);
      expect(result.current.products[0].category).toBe('smartphones');
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('get laptops (Mac)', async () => {
    const Wrapper = getWrapper('?search=Mac');
    const { result } = renderHook(() => useCatalog(), {
      wrapper: Wrapper,
    });
    await waitFor(() => {
      expect(result.current.products).toHaveLength(searchMac.length);
      expect(result.current.products[0].category).toBe('laptops');
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
