
import React from 'react';

interface UserDataProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserData: React.FC<UserDataProps> = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
}) => {
  return (
    <div className="flex items-center border p-4 rounded shadow-md">
      <img
        src={avatar}
        alt={`${first_name} ${last_name}`}
        className="w-16 h-16 rounded-full mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold">
          {first_name} {last_name}
        </h2>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">ID: {id}</p>
      </div>
    </div>
  );
};

export default UserData;
