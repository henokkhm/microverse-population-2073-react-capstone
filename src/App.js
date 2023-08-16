import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { getWorldData } from './redux/world/worldSlice';
import ContinentPage from './pages/ContinentPage';
import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorldData());
  }, [dispatch]);

  return (
    <div>
      <header>
        <h1>Population 2073</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:regionName" element={<ContinentPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
