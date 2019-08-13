import React, { useState } from 'react';

function Post({ post }) {
  const { title, body } = post;

  const [collapsed, setCollapsed] = useState(true);
  const theExcerpt = body.substring(0, 40);

  return (
    <div>
      <h2 className="h4">{title}</h2>
      {body && (
        <p aria-hidden={collapsed}>
          {!collapsed ? body : theExcerpt}
          <button
            className="btn btn-link"
            onClick={() => setCollapsed(!collapsed)}
          >
            {!collapsed ? 'Less...' : 'More...'}
          </button>
        </p>
      )}
    </div>
  )
}

export default Post;