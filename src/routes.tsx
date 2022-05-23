/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/Landing/Landing';
import AddOfficePage from './pages/Office/AddOffice/AddOffice';
import EditOfficePage from './pages/Office/EditOffice/EditOffice';
import OfficeViewPage from './pages/OfficeView/OfficeView';

import Layouts from './layouts/index';

export enum RouteList {
  Landing = '/',
  OfficeView = '/office/:id',
  AddOffice='/office/add',
  EditOffice='/office/edit/:id',
}
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteList.Landing} element={<Layouts.PlainLayout component={LandingPage} />} />
        <Route path={RouteList.OfficeView} element={<Layouts.HeaderLayout title="Office" component={OfficeViewPage} />} />
        <Route path={RouteList.AddOffice} element={<Layouts.HeaderLayout title="Add Office" component={AddOfficePage} />} />
        <Route path={RouteList.EditOffice} element={<Layouts.HeaderLayout title="Edit Office" component={EditOfficePage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
