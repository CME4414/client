import React from "react";
import { hot } from 'react-hot-loader/root';

class ChallengeList extends React.Component {
    render() {
        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <p className="w-30 h-20 inline-flex items-center justify-center text-gray-500 float-left" > Your Challenges</p>
                    <button className="w-12 h-20 inline-flex items-center justify-center text-gray-500 float-right ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </button>
                    <button className="w-12 h-20 inline-flex items-center justify-center text-gray-500 float-right ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                    </button>
                    <button className="w-12 h-20 inline-flex items-center justify-center text-gray-500 float-right ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">

                        <button className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                            <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/94.jpg"/>
                        </button>
                       
                        <button className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 float-right">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </button>

                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                        <span className="text-left text-sm text-yellow-600"> #category</span>
                        <span className="text-left text-sm text-yellow-600"> #category</span>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                    <button className="w-12 h-12inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                            <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/48.jpg"/>
                    </button>

                    <button className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/77.jpg"/>
                    </button>

                    <button className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/24.jpg"/>
                    </button>

                    <button className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-4 float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                    <span className="text-left text-sm text-yellow-600"> #category</span>
                        <span className="text-left text-sm text-yellow-600"> #category</span>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>

                    <button className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-4 float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/33.jpg"/>
                    </div>
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 ">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/66.jpg"/>
                    </div>
                    <button className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-4 float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/women/98.jpg"/>
                    </div>

                    <button className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-4 float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                    <span className="text-left text-sm text-yellow-600"> #category</span>
                        <span className="text-left text-sm text-yellow-600"> #category</span>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/46.jpg"/>
                    </div>
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                        <img className="rounded-full w-10 h-10" src="https://randomuser.me/api/portraits/men/56.jpg"/>
                    </div>
                    <button className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 mb-4 float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                    </button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                    </div>
                </div>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                    Create New Challenge
                </button>
            </div>
            </section>
        );
    }
}

export default hot(ChallengeList);



// <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// </svg>