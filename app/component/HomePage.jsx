import Link from 'next/link'
import React from 'react'
import styles from "./bubble.module.css";

const HomePage = ({ data }) => {
  return (
    <section className="text-gray-600  bg-[#f5f5f7]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-3xl font-medium  mb-4 text-gray-900">
            {"Let's Explore The Countries".split("").map((child, idx) => (
              <span className={styles.hoverText} key={idx}>
                {child}
              </span>
            ))}
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
        </div>

        <div className="flex flex-wrap -m-2">
          {
            data.map(function (countries) {
              return (
                <div key={countries.name.common} className='p-2 lg:w-1/4 md:w-1/2 w-full'>
                  <Link href={`/country/${countries.name.common}`}>
                    <div className='h-full flex items-center border-gray-200 border p-4 shadow-lg rounded-lg bg-white'>
                      <span className='w-16 h-16 flex-shrink-0 rounded-full mr-4' style={{ fontSize: '4rem', textAlign: 'center', lineHeight: '4rem' }}>
                        {countries.flag}
                      </span>
                      <div className="flex-grow">
                        <h2 className="text-gray-900  font-medium"> {countries.name.common} </h2>
                        <p className="text-gray-500"> {countries.name.official} </p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HomePage