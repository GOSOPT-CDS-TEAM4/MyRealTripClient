import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DetailTour from '../../pages/DetailTour';
import Landing from '../../pages/Landing';
import Tour from '../../pages/Tour';
import TourList from '../../pages/TourListPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/detailTour/:tourId" element={<DetailTour />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tourList" element={<TourList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
