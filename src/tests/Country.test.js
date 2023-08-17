import { render, screen } from '@testing-library/react';

import Country from '../components/countries/Country';

describe('The Country component', () => {
  it('renders country name and population', () => {
    const countryData = {
      id: '6de33d15-f97e-4005-850f-8fc37f17a79c',
      name: 'Ethiopia [mock]',
      populationIn2073: 278863945,
    };

    render(
      <Country
        key={countryData.id}
        name={countryData.name}
        populationIn2073={countryData.populationIn2073}
      />,
    );

    expect(screen.getByText(/Ethiopia/i)).toBeInTheDocument();
    expect(screen.getByText(/278,863,945/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const countryData = {
      id: '6de33d15-f97e-4005-850f-8fc37f17a79c',
      name: 'Ethiopia [mock]',
      populationIn2073: 278863945,
    };
    const { asFragment } = render(
      <Country
        key={countryData.id}
        name={countryData.name}
        populationIn2073={countryData.populationIn2073}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
