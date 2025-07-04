'use client';
import Link from 'next/link'
import React from 'react'

const NotFound = () => {

  // دالة العودة للصفحة السابقة
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className='mt-[110px] container'>
      <section className="bg-white dark:bg-gray-900">
        <div className="container min-h-screen px-6 py-12 mx-auto flex flex-col justify-between lg:flex-row lg:flex lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <img className='w-[300px]' src='https://merakiui.com/images/components/illustration.svg'/>
            <h1 className="mt-3 text-2xl font-semibold !text-[#E4002B] md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>

            <div className="flex items-center mt-6 gap-x-3">
              <button
                onClick={goBack}
                className="flex items-center justify-center !text-[#E4002B] w-1/2 px-5 py-2 text-sm  transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
              </button>

              <Link href={"/"} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 !bg-[#E4002B] rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 page" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound
