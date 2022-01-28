import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const User = ({ username, fullName }) => {
  const addDefaultImageSrc = (ev) => {
    ev.target.src = '/images/avatars/default.jpg';
  };

  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-cols-4 gap-4 mb-6 items-center"
    >
      <div className="flex items-center justify-between col-span-1">
        <img
          onError={addDefaultImageSrc}
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold tet-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
};

export default User;

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
};
