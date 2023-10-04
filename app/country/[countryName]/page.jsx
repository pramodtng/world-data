/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React from 'react'


async function getDetailsByCountry(name) {
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return await data.json();
}

const CountryName = async ({ params }) => {
  const name = params.countryName;
  const data = await getDetailsByCountry(name)
  const language = Object.keys(data[0].languages)[0];
  return (
    <main className="profile-page">
      <section className="relative block h-[600px]">
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627215477561-f0b7755115e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img alt="..." src="" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px z-10" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"> {data[0].population} </span><span className="text-sm text-blueGray-400">Population</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"> {data[0].area} </span><span className="text-sm text-blueGray-400">Area</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600"> {data[0].borders ? borderString : "No Data"} </span><span className="text-sm text-blueGray-400">Border</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {/* {data[0].name.common} ({data[0].name.nativeName['dzo'].official}) */}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {data[0].capital}
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto py-8">
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Language</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].languages[language]} </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-red-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Region</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].region} </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Sub-Region</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].subregion} </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Currencies</span>
                    <div className="flex items-center justify-between">
                      {/* <span className="text-gray-500"> {data[0].currencies['BTN'].name} ({data[0].currencies['BTN'].symbol}) </span> */}
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Country Code</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].idd.root}{data[0].idd.suffixes} </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Time Zone</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].timezones} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CountryName