import React from "react";
import { hot } from 'react-hot-loader/root';

class Signup extends React.Component {
    render() {
        return (
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Join and create your community to reach your goals ✨</h1>
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin. </p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 opacity-90">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign up</h2>
                    <i className="float-right"></i>
                    {/* <div className="relative mb-4">
                        <label for="user-name" className="leading-7 text-sm text-gray-600">Username</label>
                        <input type="text" id="user-name" name="user-name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div> */}
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label for="pwd" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="text" id="pwd" name="pwd" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 rounded text-lg">Sign up</button>
                    <p className="text-sm text-gray-500 mt-3 text-center">or</p>
                    <button className="text-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"> Login</button>
                </div>
            </div>
            </section>
        );
    }
}

export default hot(Signup);

