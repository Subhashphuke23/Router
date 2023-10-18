import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const { items } = useSelector((state) => state.posts);
  const post = items.find((post) => post.id === parseInt(id, 10));

  return (
    <div>
      <h2>Details Page</h2>
      {post ? (
        <div>
          <img src={post.imgSrc} alt={`Post ${post.id}`} />
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default DetailsPage;
