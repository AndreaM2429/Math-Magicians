/* eslint-disable import/extensions */
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div className="container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
