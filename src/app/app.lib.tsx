import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '@/app/store';

export function getWrapperForTest(path: string) {
  return (props: { children: ReactNode }) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[path]}>{props.children}</MemoryRouter>
      </Provider>
    );
  };
}
