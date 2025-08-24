import React from 'react';

function Footer({ navigation, social }) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8">
        <nav
          aria-label="Footer"
          className="mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-6 flex justify-center gap-x-10">
          {social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6 hover:text-indigo-500" />
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-sm/6 text-gray-600">
          &copy; 2024 Aprian Firlanda Imani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
