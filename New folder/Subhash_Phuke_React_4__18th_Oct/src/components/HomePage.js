import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Home Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((post) => (
            <li key={post.id}>
              <Link to={`/item/${post.id}`}>
                <img src={post.imgSrc} alt={`Post ${post.id}`} />
                <h3>{post.title}</h3>
                <p>{`${post.body.substring(0, 100)}...`}</p>
                <p>
                  <Link to={`/item/${post.id}`}>Read More...</Link>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
