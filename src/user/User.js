import React from 'react';

function User({ user, getUser }) {
  const { id, name } = user;

  return (
    <button
      type="button"
      className="btn btn-link"
      id={`user-${id}`}
      onClick={getUser}
    >
      {name}
    </button>
  )
}

export default User;