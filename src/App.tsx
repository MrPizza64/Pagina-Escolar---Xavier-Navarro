import './App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './pages/landingPage';
import CreatorPage from './pages/creatorPage';
import ProyectsPage from './pages/proyectsPage';
import Navbar from './components/Navbar';
import PageContainer from './common/pagecontainer';

function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/creator' element={<CreatorPage />} />
          <Route path='/proyects' element={<ProyectsPage />} />
        </Routes>
      </PageContainer>
    </>
  );
};

export default App;
