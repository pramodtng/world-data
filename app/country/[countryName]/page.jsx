import React from 'react'
import {
  LanguageIcon,
  MapPinIcon,
  GlobeAltIcon,
  ChatBubbleLeftEllipsisIcon,
  ClockIcon
} from '@heroicons/react/24/solid'




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
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
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
              <div className="flex flex-wrap justify-between">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <span className='w-16 h-16 flex-shrink-0 rounded-full mr-4' style={{ fontSize: '10rem', textAlign: 'center', lineHeight: '4rem' }}>
                      {data[0].flag}
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-5/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-md font-bold block uppercase tracking-wide text-blueGray-600"> {data[0].population} </span><span className="text-sm text-blueGray-400">Population</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-md font-bold block uppercase tracking-wide text-blueGray-600"> {data[0].area} km<sup>2</sup> </span><span className="text-sm text-blueGray-400">Area</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-md font-bold block uppercase tracking-wide text-blueGray-600">
                        {data[0].borders ? (
                          Object.keys(data[0].borders).map((border, index) => (
                            <span key={border} className="border-separator">
                              {data[0].borders[border]}
                              {index < Object.keys(data[0].borders).length - 1 ? ' | ' : ''}
                            </span>
                          ))
                        ) : (
                          "No Data"
                        )}
                      </span>
                      <span className="text-sm text-blueGray-400">Border</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {data[0].name.common} ({data[0].name.nativeName[language].official})
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {data[0].capital}
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto py-8">
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-white-200 h-16 w-16 rounded">
                    <LanguageIcon color="red" className='w-10 h-10' />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Language</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].languages[language]} </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-white-200 h-16 w-16 rounded">
                    <MapPinIcon color="red" className='w-10 h-10' />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Region</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].region} </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-white-200 h-16 w-16 rounded">
                    <GlobeAltIcon color="red" className='w-10 h-10' />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Sub-Region</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].subregion} </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-white-200 h-16 w-16 rounded">
                    {Object.keys(data[0].currencies).map((currencyCode, index) => (
                      <span key={currencyCode} className='rounded-full text-red-600' style={{ fontSize: '2rem', textAlign: 'center', }}>
                        {index === 0 && (
                          <ol>
                            <li>
                              {data[0].currencies[currencyCode].symbol}
                            </li>
                          </ol>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Currencies</span>
                    <div className="">
                      {Object.keys(data[0].currencies).map(currencyCode => (
                        <span key={currencyCode} className="text-gray-500">
                          <ol>
                            <li>
                              {data[0].currencies[currencyCode].name} ({data[0].currencies[currencyCode].symbol})
                            </li>
                          </ol>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-white-200 h-16 w-16 rounded">
                    <ChatBubbleLeftEllipsisIcon color='red' className='w-10 h-10' />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Country Code</span>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500"> {data[0].idd.root}{data[0].idd.suffixes} </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-[#f5f5f7] rounded-lg shadow-lg">
                  <div className="flex flex-shrink-0 items-center justify-center bg-white-200 h-16 w-16 rounded">
                    <ClockIcon color='red' className='w-10 h-10' />
                  </div>
                  <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Time Zone</span>
                    <div className="flex flex-wrap">
                      {Object.keys(data[0].timezones).map(currencyCode => (
                        <span key={currencyCode} className="text-gray-500 px-2">
                          {data[0].timezones[currencyCode]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid max-w-6xl mx-auto py-8">
                {data[0].maps['googleMaps'] ? (
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?q=${(data[0].name.common)}&key=${process.env.NEXT_PUBLIC_API_KEY}`}
                    style={{ border: '0' }}
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>No Google Maps URL available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CountryName

