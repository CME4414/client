import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className="xl:w-1/4 lg:w-1/4 bg-gray-200 absolute inset-0 h-1/4 py-12 px-12 m-auto">
        <div className="text-center mb-4 mt-5">
          <button
            className="absolute right-5 top-5"
            type="button"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-500 mb-4">Invite Your Friend</h1>
          <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto">Enter your friend&apos;s email:</p>
          <input className="m-5 p-1 py-2 px-8 border border-yellow-500 bg-gray-100" />
          <button
            className=" mx-auto mt-8 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
            type="button"
          >
            Invite
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
