import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalProvider from './Context/GlobalContext';
import DefaultLayout from './Layout/DefaultLayout';
// Pages
import Homepage from './Pages/Homepage';
import GameDetailPage from './Pages/GameDetail';
import { AddGame } from './Pages/AddGame';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddGame />} />
            <Route path="/games/:id" element={<GameDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;