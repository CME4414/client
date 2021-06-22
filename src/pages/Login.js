import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import {
  Link, useHistory,
} from 'react-router-dom';
import Header from '../components/Header';
import api from '../api';
import { apiData } from '../api/utils';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { addToast } = useToasts();

  const onClickLogin = async () => {
    if (email && password) {
      try {
        const result = await api.login({
          email,
          password,
        });
        const data = apiData(result);
        if (data.message) {
          addToast(data.message, {
            appearance: 'error',
          });
        } else {
          window.localStorage.setItem('token', data.access_token);
          window.localStorage.setItem('user', JSON.stringify(data.user));
          history.push('/challenges');
        }
      } catch {
        addToast('Network error!', {
          appearance: 'error',
        });
      }
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <Header />
      <div className="container px-5 py-48 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Login to reach your goals
            <span
              aria-label="asda"
              role="img"
            >
              ✨
            </span>
          </h1>
          <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin. </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 opacity-90">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
          <div className="relative mb-4">
            <label
              className="leading-7 text-sm text-gray-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
            />
          </div>
          <div className="relative mb-4">
            <label
              className="leading-7 text-sm text-gray-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
              type="password"
              value={password}
            />
          </div>
          <label className="inline-flex items-center mt-0">
            <input
              checked
              className="h-4 w-4 text-gray-600 mb-3"
              onChange={() => {}}
              type="checkbox"
            />
            <p className="text-sm ml-2 text-gray-500 mb-3 w-full">Remember me</p>
          </label>

          <div className="flex justify-center align-items">
            <button
              className="text-white bg-yellow-500 border-0 py-2 px-8 m-5 focus:outline-none hover:bg-gray-700 rounded text-lg"
              onClick={onClickLogin}
              type="button"
            >
              Login
            </button>
            <Link to="/signup">
              <button
                className="text-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg m-5"
                type="button"
              >
                {' '}
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
