import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Context
import GlobalProvider from './Context/GlobalContext';
// Layout
import DefaultLayout from './Layout/DefaultLayout';
// Pages
import Homepage from './Pages/Homepage';
import AddGame from './Pages/AddGame';
import GameDetail from './Pages/GameDetail';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/add" element={<AddGame />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;