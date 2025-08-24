import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import GithubIcon from '../assets/icons/github-icon.svg?react';
import LinkedinIcon from '../assets/icons/linkedin-icon.svg?react';
import InstagramIcon from '../assets/icons/instagram-icon.svg?react';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Articles', href: '/articles' },
  { name: 'Projects', href: '/projects' },
  { name: 'Uses', href: '/uses' },
];

const social = [
  { name: 'Github', href: 'https://github.com/aprianfirlanda', icon: GithubIcon },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aprian-firlanda-imani-108852130/',
    icon: LinkedinIcon,
  },
  { name: 'Instagram', href: 'https://instagram.com/virlandd', icon: InstagramIcon },
];

function RootLayout() {
  return (
    <div>
      <Header navigation={navigation} />
      <main>
        <Outlet />
      </main>
      <Footer navigation={navigation} social={social} />
    </div>
  );
}

export default RootLayout;
