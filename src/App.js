import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getRegions } from './redux/regions/regionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>Population 2073</h1>
      </header>
    </div>
  );
}

export default App;
