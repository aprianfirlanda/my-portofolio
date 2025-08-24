import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <div className="mx-auto mt-48 max-w-2xl text-center">
        <p className="text-base/8 font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          This page does not exist
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <div className="mt-10 flex justify-center">
          <Link to="/" className="text-sm/6 font-semibold text-indigo-600">
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
