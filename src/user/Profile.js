import React from 'react';
import logo from '../logo.svg';

function Profile({ profile }) {
  // Bail out.
  if(!profile) return null;

  const {
    name,
    email,
    phone,
    website,
    address: {
      city,
      street,
      suite,
      zipcode
    }
  } = profile;

  return(
    <div className="profile card">
      <img
        src={logo}
        alt={`avatar of ${name}`}
        className="card-img"
      />
      <div className="card-body">
        <h2 className="h3 card-title">{name}</h2>
        <p className="h6 card-text">{phone}</p>
        <p className="h6 card-text">{email}</p>
        <p className="h6 card-text">{website}</p>
        <p className="h6 card-text">{`${city}, ${zipcode}`}</p>
        <p className="h6 card-text">{`${street}, ${suite}`}</p>
      </div>
    </div>
  )
}

export default Profile;