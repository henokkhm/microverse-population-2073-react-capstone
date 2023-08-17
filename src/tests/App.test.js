import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import App from '../App';
import mockWorldData from '../data/world.json';

// Create a mock Redux store with Thunk middleware
const mockStore = configureMockStore([thunk]);

// Set up the initial state for store
const initialState = {
  world: {
    worldData: mockWorldData,
    isLoadingWorldData: false,
    errorLoadingWorldData: false,
  },
  region: {
    regionData: {},
    isLoadingRegionData: true,
    errorLoadingRegionData: false,
  },
};

// Set up store
const store = mockStore(initialState);

describe('Home page', () => {
  test('renders the page title', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    await waitFor(() => {
      const pageTitle = getByText(/population in 2073/i);
      expect(pageTitle).toBeInTheDocument();
    });
  });

  test("renders each continent's name", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    await waitFor(() => {
      const asia = screen.getByText(/asia/i);
      expect(asia).toBeInTheDocument();

      const africa = screen.getByText(/africa/i);
      expect(africa).toBeInTheDocument();

      const latinAmerica = screen.getByText(/latin america/i);
      expect(latinAmerica).toBeInTheDocument();

      const europe = screen.getByText(/europe/i);
      expect(europe).toBeInTheDocument();

      const northernAmerica = screen.getByText(/northern america/i);
      expect(northernAmerica).toBeInTheDocument();

      const oceania = screen.getByText(/oceania/i);
      expect(oceania).toBeInTheDocument();
    });
  });

  it('matches snapshot', async () => {
    // Render the component with the mock store
    const { asFragment } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(asFragment).toMatchSnapshot();
    });
  });
});
