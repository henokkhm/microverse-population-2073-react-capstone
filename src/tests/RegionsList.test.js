import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import RegionsList from '../components/regions/RegionsList';

describe('The RegionsList component', () => {
  it('matches snapshot', () => {
    const regions = [
      {
        id: 'bbf0577d-2cec-44e8-a8c7-a394c2fcca99',
        name: 'Asia [mock]',
        populationIn2073: 5174232028,
        imageURL: '/images/asia.png',
      },

      {
        id: '46d44cfa-1781-4afd-89b7-e760af80e3b6',
        name: 'Africa [mock]',
        populationIn2073: 3285421933,
        imageURL: '/images/africa.png',
      },
    ];

    const { asFragment } = render(
      <BrowserRouter>
        <RegionsList regions={regions} />
      </BrowserRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
