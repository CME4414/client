/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import api from '../api';
import { apiData } from '../api/utils';
import colors from '../helpers/colors';
import Header from '../components/Header';
import CreateChallenge from '../components/modals/CreateChallenge';
import Invite from '../components/modals/Invite';

const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const [createNewChallengeVisible, setCreateNewChallengeVisible] = useState(false);
  const [inviteVisible, setInviteVisible] = useState(false);
  const [challengeID, setChallengeID] = useState('');

  const onCreateNewChallengeClick = () => {
    setCreateNewChallengeVisible(true);
  };

  const fetchChallenges = async () => {
    const response = await api.getChallenges();
    const data = apiData(response);
    return data;
  };

  const onInviteClick = e => {
    setInviteVisible(true);
    setChallengeID(e.currentTarget.getAttribute('data-challenge-id'));
  };

  useEffect(() => {
    fetchChallenges().then(data => setChallenges(data));
  }, [createNewChallengeVisible, inviteVisible]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <Header />
        <div className="container px-5 mx-auto">
          <p className="w-30 h-20 inline-flex items-center justify-center text-gray-500 float-left"> Your Challenges</p>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {challenges.map(relation => {
              const { challenge, users } = relation;
              return (
                <div
                  key={challenge.id}
                  className="xl:w-1/3 md:w-1/2 p-4"
                >
                  <div className="border border-gray-200 p-6 rounded-lg">
                    {users.map((user, index) => {
                      return (
                        <button
                          key={user.id}
                          className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${colors[index % colors.length]}-100 text-${colors[index % colors.length]}-500`}
                          type="button"
                        >
                          <div className="rounded-full h-24 w-24 flex items-center justify-center"><strong className="text-2xl">{user.user.name.substr(0, 1)}</strong></div>
                        </button>
                      );
                    })}

                    <button
                      className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-500 float-right"
                      data-challenge-id={challenge.id}
                      onClick={onInviteClick}
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
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>

                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2"><Link to={{ pathname: `/challenge/${challenge.id}` }}>{challenge.title}</Link></h2>
                    <p className="leading-relaxed text-base">{challenge.info}</p>
                  </div>
                </div>
              );
            })}

          </div>
          <button
            className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            onClick={onCreateNewChallengeClick}
            type="button"
          >
            Create New Challenge
          </button>
        </div>
      </section>
      {createNewChallengeVisible && (
        <CreateChallenge
          closeModal={() => setCreateNewChallengeVisible(false)}
        />
      )}

      {inviteVisible && (
        <Invite
          challengeID={challengeID}
          closeModal={() => setInviteVisible(false)}
        />
      )}
    </>
  );
};

export default ChallengeList;

// <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// </svg>
