/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import OfficePage from './pages/Office/Office';
import OfficeViewPage from './pages/OfficeView/OfficeView';

import Layouts from './layouts/index';

export enum RouteList {
  Landing = '/',
  OfficeView = '/office-view/:id',
  Office='/office',
}
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteList.Landing} element={<Layouts.PlainLayout component={LandingPage} />} />
        <Route path={RouteList.OfficeView} element={<Layouts.HeaderLayout component={OfficeViewPage} />} />
        <Route path={RouteList.Office} element={<Layouts.HeaderLayout component={OfficePage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
