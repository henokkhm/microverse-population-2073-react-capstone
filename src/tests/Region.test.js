import { render, screen } from '@testing-library/react';

import Region from '../components/regions/Region';

describe('The Region component', () => {
  it('renders region name and population', () => {
    const { name, imageURL, populationIn2073 } = {
      name: 'Asia [mock]',
      imageURL: '/images/asia.png',
      populationIn2073: 5174232028,
    };

    render(
      <Region
        name={name}
        imageURL={imageURL}
        populationIn2073={populationIn2073}
        index={0}
      />,
    );

    expect(screen.getByText(/Asia/i)).toBeInTheDocument();
    expect(screen.getByText(/5,174,232,028/i)).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { name, imageURL, populationIn2073 } = {
      name: 'Asia [mock]',
      imageURL: '/images/asia.png',
      populationIn2073: 5174232028,
    };

    const { asFragment } = render(
      <Region
        name={name}
        imageURL={imageURL}
        populationIn2073={populationIn2073}
        index={0}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
