'use client';

import { InputField } from '@/components/InputFields/InputFields';
import { useEffect, useState } from 'react';
import { updateUser } from '@/api/auth';
import './account-info.scss';

export const AccountInfo = ({ user }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    avatarUrl: user.avatarUrl,
  });

  useEffect(() => {
    setFormData({
      username: user.username,
      avatarUrl: user.avatarUrl,
    });
  }, [user.avatarUrl, user.username]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(formData);
    window.location.reload();
  };

  const handleCancel = () => {
    setFormData({
      username: user.username,
      avatarUrl: user.avatarUrl,
    });
  };

  if (!user) {
    return <p>Завантаження...</p>;
  }

  return (
    <div className="accountInfo">
      <img
        src={formData.avatarUrl}
        alt="user avatar"
        className="userAvatarCabinet"
      />
      <div className="updateAccountInfo">
        <InputField
          label="Username"
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <InputField
          label="Link for photo profile"
          name="avatarUrl"
          type="text"
          placeholder="Link for photo profile"
          value={formData.avatarUrl}
          onChange={handleInputChange}
        />
        <div className="buttonsFields">
          <button
            type="button"
            className="canselInfoButton"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="saveInfoButton"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
