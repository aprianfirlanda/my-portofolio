import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Projects', href: '/projects' },
  { name: 'Uses', href: '/uses' },
];

function RootLayout() {
  return (
    <div>
      <Header navigation={navigation} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
