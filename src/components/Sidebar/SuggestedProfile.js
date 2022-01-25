import React from 'react';
import PropTypes from 'prop-types';

const SuggestedProfile = ({ username }) => {
  return <p>SuggestedProfile {username}</p>;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  username: PropTypes.string.isRequired,
};
