import React from 'react';

function Error() {
  const errorImgUrl = 'http://blogs.discovermagazine.com/but-not-simpler/files/2014/03/scooby_doo_21.jpg';

  return (
    <div
      id="ruh-row"
      key="error"
      className="container text-center"
    >
      <div className="card">
        <img
          src={`${errorImgUrl}`}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h1 className="card-title">Ruh-roh Raggy!</h1>
          <p className="card-text">Something went wrong...</p>
        </div>
      </div>
    </div>
  )
}

export default Error;