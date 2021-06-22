import React, { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import api from '../api';
import { apiData } from '../api/utils';
import colors from '../helpers/colors';
import Header from '../components/Header';

const Challenge = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [tab, setTab] = useState('list');
  const [progress, setProgress] = useState([]);

  const fetchChallenge = async () => {
    const response = await api.getChallenge(id);
    const data = apiData(response);
    return data;
  };

  const fetchProgress = async () => {
    const progressResponse = await api.getProgress(id);
    const progressData = apiData(progressResponse);
    setProgress(progressData);
  };

  useEffect(() => {
    fetchChallenge().then(data => setChallenge(data));
    fetchProgress();
  }, []);

  const onNewProgressClick = async () => {
    if (name && info) {
      const response = await api.addProgress({
        challenge_id: id,
        info,
        title: name,
        user: JSON.parse(window.localStorage.getItem('user')).id,
      });

      apiData(response);

      const progressResponse = await api.getProgress(id);
      const progressData = apiData(progressResponse);
      setProgress(progressData);
      setTab('list');
      setName('');
      setInfo('');
    }
  };

  if (!challenge) return null;
  return (
    <section className="text-gray-600 body-font">
      <Header />
      <div className="container px-8 py-10 mx-auto flex flex-col">
        <div className="lg:w-full mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/6 text-center sm:pr-4 sm:py-4">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{challenge.title}</h2>
                <div className="w-12 h-1 bg-yellow-400 rounded mt-2 mb-4" />
              </div>
              {challenge.users.map((user, index) => {
                return (
                  <div
                    key={user.id}
                    className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${colors[index % colors.length]}-100 text-${colors[index % colors.length]}-500`}
                  >
                    <div className="rounded-full h-24 w-24 flex items-center justify-center"><strong className="text-2xl">{user.user.name.substr(0, 1)}</strong></div>
                  </div>
                );
              })}

              <div className="flex flex-col items-center bg-yellow-100 text-gray-700 p-4 m-2 rounded-lg">
                <h2 className="font-medium float-left text-gray-700">Challenge:</h2>
                <p className="text-sm">{challenge.info}</p>
              </div>
              <div className="hidden lg:flex flex-col">
                <button
                  className={`flex items-center justify-center ${tab === 'list' ? 'bg-yellow-300' : 'bg-gray-100'} hover:bg-yellow-200 text-gray-700 p-4 m-2 ${tab === 'list' ? '-mr-4' : ''}`}
                  onClick={() => setTab('list')}
                  type="button"
                >
                  Progress List
                </button>
                <button
                  className={`flex items-center justify-center ${tab === 'add' ? 'bg-yellow-300' : 'bg-gray-100'} hover:bg-yellow-200 text-gray-700 p-4 m-2 ${tab === 'add' ? '-mr-4' : ''}`}
                  onClick={() => setTab('add')}
                  type="button"
                >
                  Add Progress
                </button>
              </div>
            </div>

            {tab === 'list' && (
              <div className="sm:w-4/5 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {progress.map(pro => (
                  <div
                    key={pro.id}
                    className="w-full sm:p-4 px-4 mb-6"
                  >
                    <p className="font-medium text-4xl">{pro.user.name}</p>
                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">{pro.title}</h1>
                    <div className="leading-relaxed">{pro.info}</div>
                  </div>
                ))}
              </div>
            )}

            {tab === 'add' && (
              <div className="sm:w-4/5 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-500 mb-4">Record your progress!</h1>
                <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4">Title</p>
                <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  className="mt-5 mb-5 p-1 py-2 px-2 border border-yellow-500 bg-gray-100"
                  onChange={e => setName(e.target.value)}
                  placeholder="I don't smoke today"
                  value={name}
                />
                <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4">What did you do? Briefly explain:</p>
                <textarea
                  className="mt-5 mb-5 p-1 py-2 px-2 border border-yellow-500 bg-gray-100"
                  cols="40"
                  onChange={e => setInfo(e.target.value)}
                  placeholder="I feel so good..."
                  rows="3"
                  value={info}
                />
                <br />
                <button
                  className=" mx-auto mt-8 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg d-block"
                  onClick={onNewProgressClick}
                  type="button"
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
