"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SearchComponent = () => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');

  const fetchDataByCountry = async () => {
    try {
      if (input.trim() !== '') {
        const response = await fetch(`https://restcountries.com/v3.1/name/${input}`);
        const res = await response.json();
        setData(res);
      } else {
        // If input is empty, clear the data
        setData(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataByCountry();
  }, [input]);

  let content;
  if (data && data[0]) {
    content = (
      <div key={data[0].name.common} className='p-2 lg:w-1/4 md:w-1/2 w-full'>
        <Link href={`/country/${data[0].name.common}`}>
          <div className='h-full flex items-center border-gray-200 border p-4 shadow-lg rounded-lg bg-white'>
            <span className='w-16 h-16 flex-shrink-0 rounded-full mr-4' style={{ fontSize: '4rem', textAlign: 'center', lineHeight: '4rem' }}>
              {data[0].flag}
            </span>
            <div className="flex-grow">
              <h2 className="text-gray-900 font-medium"> {data[0].name.common} </h2>
              <p className="text-gray-500"> {data[0].name.official} </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="px-2 lg:px-24">
      <div className="relative w-full">
        <label htmlFor="Search" className="sr-only">Search</label>
        <input
          type="text"
          id="Search"
          placeholder="Search for Countries..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm px-4"
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          {/* <button 
            type="button" 
            className="text-gray-600 hover:text-gray-700" 
            onClick={fetchDataByCountry}
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button> */}
        </span>
        {content}
      </div>
    </div>
  );
};

export default SearchComponent;
