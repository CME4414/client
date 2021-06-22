import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useToasts } from 'react-toast-notifications';
import { WithContext as ReactTags } from 'react-tag-input';
import customStyles from '../../helpers/modalStyles';
import validateEmail from '../../helpers/validateEmail';
import api from '../../api';
import { apiData } from '../../api/utils';

const Invite = ({ challengeID, closeModal }) => {
  const { addToast } = useToasts();
  const [attendees, setAttendees] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchUsers = async () => {
    const response = await api.users();
    const data = apiData(response);
    return data;
  };

  useEffect(() => {
    fetchUsers().then(data => {
      if (data) {
        setSuggestions(data
          .filter(v => v.email !== JSON.parse(window.localStorage.getItem('user')).email)
          .map(val => ({ id: val.email, text: val.name })));
      }
    });
  }, []);

  const onNewAttendee = val => {
    if (validateEmail(val.id)) {
      setAttendees([...attendees, val]);
    } else {
      addToast('You need to enter valid email address!', {
        appearance: 'error',
      });
    }
  };

  const onAttendeeDelete = val => {
    setAttendees(attendees.filter((value, index) => {
      return val !== index;
    }));
  };

  const onNewChallengeClick = async () => {
    if (attendees.length > 0) {
      await api.addInvitee({
        id: challengeID,
        users: attendees.map(v => v.id).join(','),
      });
      closeModal();
    } else {
      addToast('Fill all inputs!', {
        appearance: 'error',
      });
    }
  };

  return (
    <Modal
      contentLabel="Example Modal"
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div>
        <div className="text-center mb-4 mt-5">
          <button
            className="absolute right-5 top-5"
            onClick={closeModal}
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
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-500 mb-4">Invite someone</h1>
          <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto">Attendees:</p>
          <ReactTags
            autofocus={false}
            classNames={{
              tagInputField: 'm-5 p-1 py-2 px-2 border border-yellow-500 bg-gray-100',
            }}
            delimiters={[188, 13]}
            handleAddition={onNewAttendee}
            handleDelete={onAttendeeDelete}
            handleDrag={() => {}}
            suggestions={suggestions}
            tags={attendees}
          />
          <button
            className=" mx-auto mt-8 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg d-block"
            onClick={onNewChallengeClick}
            type="button"
          >
            Create
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Invite;
