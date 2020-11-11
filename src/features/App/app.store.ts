import { createStore } from 'nedux';
import { persistKeys } from 'nedux-persist';
import { createStoreHook } from 'react-nedux';

export const appStore = createStore(
  {
    darkTheme: true,
  },
  [persistKeys(['darkTheme'])],
);

export const useAppStore = createStoreHook(appStore);
