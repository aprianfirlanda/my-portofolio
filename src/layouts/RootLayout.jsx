import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
