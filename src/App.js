import './styles/App.css';

import { Router, Routes, Route, Link } from 'react-router-dom';

import { HomeView } from './views/HomeView';
import { GalleryView } from './views/GalleryView';
import { ExpositionView } from './views/ExpositionView';
import { HistoryMuseumView } from './views/HistoryMuseumView';
import { VisitorView } from './views/VisitorView';
import MoreExpositionView from './views/subviews/MoreExpositionView';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomeView/>}></Route>
        <Route path='/history' element={<HistoryMuseumView/>}></Route>
        <Route path='/exposition' element={<ExpositionView/>}></Route>
        <Route path='/gallery' element={<GalleryView/>}></Route>
        <Route path='/visitor' element={<VisitorView/>}></Route>

        <Route path='/expositons/:id' element={<MoreExpositionView />}></Route>
      </Routes>
  );
}

export default App;