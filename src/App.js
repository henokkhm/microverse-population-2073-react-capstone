import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { getWorldData } from './redux/world/worldSlice';
import ContinentPage from './pages/ContinentPage';
import Header from './components/common/Header';
import Home from './pages/Home';
import styles from './styles/App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorldData());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:regionId" element={<ContinentPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
