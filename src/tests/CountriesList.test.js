import { render } from '@testing-library/react';

import CountriesList from '../components/countries/CountriesList';

describe('The CountriesList component', () => {
  it('matches snapshot', () => {
    const { regionId, regionName, countries } = {
      regionId: 'bbf0577d-2cec-44e8-a8c7-a394c2fcca99',
      regionName: 'Asia [mock]',
      countries: [
        {
          id: '1a43497f-1e47-4095-9e8c-72d9141b5d4b',
          name: 'India [mock]',
          populationIn2073: 168404406,
        },
        {
          id: '49943bfc-c183-484e-be45-17468eb39661',
          name: 'China [mock]',
          populationIn2073: 1056989242,
        },
        {
          id: '2920d9fa-57eb-404c-b4fc-647039d43374',
          name: 'Pakistan [mock]',
          populationIn2073: 44714003,
        },
      ],
    };
    const { asFragment } = render(
      <CountriesList
        regionId={regionId}
        regionName={regionName}
        countries={countries}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
