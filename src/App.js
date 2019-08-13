import React, { useState } from 'react';
import { string, number, shape, array } from 'prop-types';
import { URL } from "./utils/utils";

import User from './user/User';
import Post from './posts/Post';
import Profile from './user/Profile';
import Error from './error/Error';

import axios from 'axios';

function App({ data }) {
  const [profile, setProfile] = useState(null);
  const [postsData, setPostsData] = useState([]);

  // Bail out early.
  if(!data || !data.length) return <Error />;

  function getUser(id) {
    const profileData = data.find(user => {
      if(id !== user.id) return;
      return user;
    });

    setProfile(profileData);

    getPosts('/posts?userId=', id);
  }

  function getPosts(param, id = '') {
    axios
      .get(URL + param + id)
      .catch(error => {
        console.log(URL + param + id);
        if (error) {
          const { response: { data, status, headers } } = error;
          console.warn(
            "data", data,
            "status", status,
            "headers", headers
          );
        }
      }).then(postData => {
        const { data } = postData;
        setPostsData(data);
      });
  }

  const setPosts = postsData.map((post, index) => {
    // Bail out early.
    if(!post || index > 50) return null;

    const { id } = post;

    return (
      <Post
        post={post}
        id={`post-${id}`}
        key={`post-${id}`}
      />
    );
  });

  const users = data.map((user, i) => {
    // Bail out early.
    if(!user) return null;

    const { id } = user;

    return (
      <li>
        <User
          user={user}
          id={`user-${id}`}
          key={`user-${id}`}
          getUser={() => getUser(id)}
        />
      </li>
    );
  });

  console.log();

  if(postsData.length === 0) {
    getPosts('/posts');
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="h2 text-center main-header">Acustaf Front-End Developer Technical Problem</h1>
        <div className="row profiles">
          <div className="col-12 col-sm-5 col-md-3">
            <Profile profile={profile} />
            <div className="card profile-users">
              <nav className="nav flex-column">
                <h3>Profiles</h3>
                <ul className="list-unstyled">{users}</ul>
              </nav>
            </div>
          </div>
          <div className="col-12 col-sm-7 col-md-9">
            <div className="posts">
              <h2>The posts</h2>
              {setPosts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
