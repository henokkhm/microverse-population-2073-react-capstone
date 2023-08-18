import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/common/Header';

describe('The Header component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
