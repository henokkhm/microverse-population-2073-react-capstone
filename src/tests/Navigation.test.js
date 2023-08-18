import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import App from '../App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockData = {
  world: {
    worldData: {
      title: 'World [mock]',
      worldImageURL: '/images/globe.gif',
      worldPopulationIn2073: 10337756759,
      regions: [
        {
          id: '46d44cfa-1781-4afd-89b7-e760af80e3b6',
          name: 'Africa [mock]',
          populationIn2073: 3285421933,
          imageURL: '/images/africa.png',
        },
      ],
    },
    isLoadingWorldData: false,
    errorLoadingWorldData: false,
  },
  region: {
    regionData: {
      regionId: '46d44cfa-1781-4afd-89b7-e760af80e3b6',
      regionName: 'Africa [mock]',
      regionImageURL: '/images/africa.png',
      regionPopulationIn2073: 3285421933,
      countries: [
        {
          id: 'b1b38c41-cb9a-44f2-929b-366b097cfe22',
          name: 'Nigeria [mock]',
          populationIn2073: 483745057,
        },
      ],
    },
    isLoadingRegionData: false,
    errorLoadingRegionData: false,
  },
};

describe('Navigation', () => {
  test(`clicking on region card link loads the regions page, 
        and clicking on the back button loads the home page`, async () => {
    const store = mockStore(mockData);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    await act(() => userEvent.click(screen.getByTestId('navlink-to-Africa [mock]-page')));
    expect(screen.getByTestId('Africa [mock]-page')).toBeInTheDocument();

    await act(() => userEvent.click(screen.getByTestId('back-button')));
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
