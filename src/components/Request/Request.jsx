import React, { useEffect, useState } from 'react';

const Request = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className='mt-12 text-gray-50 flex flex-col items-center'>
      <h1 className="mt-6 mb-6 text-2xl font-semibold">
        Creación de notas con fetch
      </h1>
      <ul className='flex flex-col items-center'>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Request;