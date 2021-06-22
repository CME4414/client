import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <section className="text-gray-600 body-font">
        <Header />
        <div className="container px-8 py-10 mx-auto flex flex-col">
          <div className="lg:w-full mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/6 text-center sm:pr-4 sm:py-4">

                <button
                  className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500"
                  type="button"
                >
                  <img
                    alt="sada"
                    className="rounded-full w-20 h-20"
                    src="https://randomuser.me/api/portraits/women/16.jpg"
                  />
                </button>

                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Jane Doe</h2>
                  <div className="w-12 h-1 bg-yellow-400 rounded mt-2 mb-4" />
                </div>

                <div className="hidden lg:flex flex-col">
                  <button
                    className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-200 text-gray-700 p-4 m-2 -mr-4 "
                    type="button"
                  >
                    Settings
                  </button>
                  <button
                    className="flex items-center justify-center bg-gray-200 hover:bg-yellow-200 text-gray-700 p-4 m-2 "
                    type="button"
                  >
                    Friends
                  </button>
                </div>
              </div>

              <div className="sm:w-4/5 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90&apos;s scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                <a
                  className="text-yellow-500 inline-flex items-center"
                  href="asd"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
