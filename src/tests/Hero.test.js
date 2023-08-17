import { render } from '@testing-library/react';

import Hero from '../components/common/Hero';

describe('The Hero component', () => {
  it('matches snapshot', () => {
    const { title, worldImageURL, worldPopulationIn2073 } = {
      title: 'World [mock]',
      worldImageURL: '/images/globe.gif',
      worldPopulationIn2073: 10337756759,
    };

    const { asFragment } = render(
      <Hero
        title={title}
        imgURL={worldImageURL}
        imgAlt="image of the glob"
        populationIn2073={worldPopulationIn2073}
        slantImage
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
