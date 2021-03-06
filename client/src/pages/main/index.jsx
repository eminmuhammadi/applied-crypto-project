import React from 'react';

// import style from './style.module.css';
import { Link } from 'react-router-dom';

/**
 * Main page (Landing page)
 * @returns {JSX.Element}
 */
function Main() {
    return (
    <div>
        <div className="bg-black px-4 py-4">
            <div className="flex justify-between items-center">
                <Link to="/" className="inline-block py-2 text-white text-xl font-bold">
                    {process.env.REACT_APP_NAME}
                </Link>
                <div className="pr-2 pl-2 w-100 float-right">
                    <Link to="/auth/sign-in"  
                        className="inline-block py-1 md:py-4 text-gray-200 hover:text-gray-100 mr-6">
                        Login
                    </Link>
                    <Link to="/auth/sign-up" 
                        className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
        <div className="bg-black md:overflow-hidden">
          <div className="px-4 py-20 md:py-4">
            <div className="md:max-w-6xl md:mx-auto">
              <div className="md:flex md:flex-wrap">
                <div className="md:w-1/2 text-center md:text-left md:pt-16">
                  <h1 className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4">
                    <br></br>
                    Storage for everyone
                  </h1>
                  <p className="text-gray-400 md:text-xl md:pr-48 pb-5">
                    File Server is a simple service that allows 
                    you to save files on the server and share them 
                    with other users.
                  </p>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="hidden md:block">
                    <div className="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8" style={{transform: 'rotate(-8deg)'}}>
                      <div className="bg-gray-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                        <div className="mb-1">
                          <span className="w-1 h-1 bg-indigo-100 rounded-full inline-block" style={{marginRight: '1px'}} />
                          <span className="w-1 h-1 bg-indigo-100 rounded-full inline-block" style={{marginRight: '1px'}} />
                          <span className="w-1 h-1 bg-indigo-100 rounded-full inline-block" />
                        </div>
                        <div className="h-1 w-12 bg-indigo-100 rounded mb-1" />
                        <div className="h-1 w-10 bg-indigo-100 rounded mb-2" />
                        <div className="flex">
                          <div className="w-6 h-3 rounded bg-indigo-100 mr-1" />
                          <div className="w-6 h-3 rounded bg-indigo-100" />
                        </div>
                        <div className="-mr-2 -mb-4 absolute bottom-0 right-0 h-16 w-10 rounded-lg bg-black border-2 border-white" />
                        <div className="w-2 h-2 rounded-full bg-black mx-auto absolute bottom-0 right-0 mr-2 -mb-2 z-10 border-2 border-white" />
                      </div>
                      <div className="text-gray-800 text-center">
                        Online <br /> Access
                      </div>
                    </div>
                    <div className="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8" style={{transform: 'rotate(-8deg)', zIndex: 2}}>
                      <div className="bg-gray-800 mx-auto rounded-lg relative mb-8 py-2 w-20 border-2 border-white">
                        <div className="h-8 bg-black w-8 rounded absolute left-0 top-0 -mt-3 ml-4" style={{transform: 'rotate(-45deg)', zIndex: -1}} />
                        <div className="h-8 bg-black w-8 rounded absolute left-0 top-0 -mt-3 ml-8" style={{transform: 'rotate(-12deg)', zIndex: -2}} />
                        <div className="flex items-center justify-center h-6 bg-gray-800 w-6 rounded-l-lg ml-auto border-4 border-white -mr-1">
                          <div className="h-2 w-2 rounded-full bg-gray-800 border-2 border-white" />
                        </div>
                        <div className="w-8 h-8 bg-black border-4 border-white rounded-full -ml-3 -mb-5" />
                      </div>
                      <div className="text-gray-800 text-center">
                        Save your Money
                      </div>
                    </div>
                    <div className="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-10 py-8" style={{transform: 'rotate(-8deg)', zIndex: 2, marginBottom: '-220px'}}>
                      <div className="bg-gray-800 mx-auto rounded-lg pt-4 mb-16 relative">
                        <div className="h-4 bg-white" />
                        <div className="text-right my-2 pb-1">
                          <div className="inline-flex w-3 h-3 rounded-full bg-white -mr-2" />
                          <div className="inline-flex w-3 h-3 rounded-full bg-gray-800 border-2 border-white mr-2" />
                        </div>
                        <div className="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-black mx-auto rounded-lg pb-2 pt-3">
                          <div className="h-2 bg-white mb-2" />
                          <div className="h-2 bg-white w-6 ml-auto rounded mr-2" />
                        </div>
                      </div>
                      <div className="text-gray-800 text-center">
                        Share with <br /> Everyone
                      </div>
                    </div>
                    <div className="mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg" style={{transform: 'rotate(-8deg)', marginRight: '-250px', zIndex: 1}}>
                      <div className="w-32 bg-gray-200" style={{height: '560px'}} />
                      <div className="flex-1 p-6">
                        <h2 className="text-lg text-gray-700 font-bold mb-3">
                          Files
                        </h2>
                        <div className="flex mb-5">
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300" />
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300" />
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300" />
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4">
                            <div className="p-1 rounded-full bg-gray-300" />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-5">
                          <div className="w-1/3 px-4">
                            <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div className="w-16 h-16 rounded-full bg-gray-200 mb-6" />
                              <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full" />
                              <div className="h-2 w-10 bg-gray-200 rounded-full" />
                            </div>
                          </div>
                          <div className="w-1/3 px-4">
                            <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div className="w-16 h-16 rounded-full bg-gray-200 mb-6" />
                              <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full" />
                              <div className="h-2 w-10 bg-gray-200 rounded-full" />
                            </div>
                          </div>
                          <div className="w-1/3 px-4">
                            <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div className="w-16 h-16 rounded-full bg-gray-200 mb-6" />
                              <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full" />
                              <div className="h-2 w-10 bg-gray-200 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <h2 className="text-lg text-gray-700 font-bold mb-3">
                          Files
                        </h2>
                        <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4" />
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                                <div className="h-2 w-10 bg-gray-100 rounded-full" />
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-green-200" />
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto" />
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4" />
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                                <div className="h-2 w-10 bg-gray-100 rounded-full" />
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-orange-200" />
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto" />
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4" />
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                                <div className="h-2 w-10 bg-gray-100 rounded-full" />
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-blue-200" />
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-8 bg-gray-100 rounded-full mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full absolute left-0 bottom-0 ml-1" style={{transform: 'rotate(-8deg)', zIndex: 1, marginBottom: '-360px'}}>
                      <div className="grid--gray h-48 w-48" />
                    </div>
                  </div>
                  <div className="md:hidden w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow">
                    <div className="h-4 bg-gray-200 absolute top-0 left-0 right-0 rounded-t-lg flex items-center">
                      <span className="h-2 w-2 rounded-full bg-red-500 inline-block mr-1 ml-2" />
                      <span className="h-2 w-2 rounded-full bg-orange-400 inline-block mr-1" />
                      <span className="h-2 w-2 rounded-full bg-green-500 inline-block mr-1" />
                    </div>
                    <div className="w-32 bg-gray-100 px-2 py-8" style={{height: '340px'}}>
                      <div className="h-2 w-16 bg-gray-300 rounded-full mb-4" />
                      <div className="flex items-center mb-4">
                        <div className="h-5 w-5 rounded-full bg-gray-300 mr-3 flex-shrink-0" />
                        <div>
                          <div className="h-2 w-10 bg-gray-300 rounded-full" />
                        </div>
                      </div>
                      <div className="h-2 w-16 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-10 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-20 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-6 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-16 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-10 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-20 bg-gray-200 rounded-full mb-2" />
                      <div className="h-2 w-6 bg-gray-200 rounded-full mb-2" />
                    </div>
                    <div className="flex-1 px-4 py-8">
                      <h2 className="text-xs text-gray-700 font-bold mb-1">
                        Files
                      </h2>
                      <div className="flex mb-5">
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2" />
                      </div>
                      <div className="flex flex-wrap -mx-2 mb-5">
                        <div className="w-1/3 px-2">
                          <div className="p-3 rounded-lg bg-white shadow">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mb-2" />
                            <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="p-3 rounded-lg bg-white shadow">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mb-2" />
                            <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="p-3 rounded-lg bg-white shadow">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mb-2" />
                            <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full" />
                            <div className="h-2 w-6 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                      </div>
                      <h2 className="text-xs text-gray-700 font-bold mb-1">
                        Files
                      </h2>
                      <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0" />
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-green-200" />
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto" />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between items-center py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0" />
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full" />
                              <div className="h-2 w-10 bg-gray-100 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-orange-200" />
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-3 md:hidden absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-10 py-6" style={{zIndex: 2, marginBottom: '-380px'}}>
                    <div className="bg-gray-800 mx-auto rounded-lg w-20 pt-3 mb-12 relative">
                      <div className="h-3 bg-white" />
                      <div className="text-right my-2">
                        <div className="inline-flex w-3 h-3 rounded-full bg-white -mr-2" />
                        <div className="inline-flex w-3 h-3 rounded-full bg-gray-800 border-2 border-white mr-2" />
                      </div>
                      <div className="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-black mx-auto rounded-lg pb-2 pt-3">
                        <div className="h-2 bg-white mb-2" />
                        <div className="h-2 bg-white w-6 ml-auto rounded mr-2" />
                      </div>
                    </div>
                    <div className="text-gray-800 text-center text-sm">
                      Share with <br /> Everyone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg className="fill-current text-white hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fillOpacity={1} d="M0,224L1440,32L1440,320L0,320Z" />
          </svg>
        </div>
        <p className="text-center p-4 text-gray-600 pt-10">
          &copy; 2021. Created by Emin Muhammadi
        </p>
    </div>
    );
};

export default Main;