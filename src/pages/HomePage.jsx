
import React from 'react';
import phonebook from '../phonebook.png';
const HomePage = () => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '8px' }}>
      <h1
        style={{
          fontSize: '6xl',
          fontWeight: 'extrabold',
          marginBottom: '4px',
          backgroundImage: 'linear-gradient(to left, #7928CA, #FF0080)',
          backgroundClip: 'text',
        }}
      >
        Welcome to our phonebook app! 
      </h1>
      <img
            src={phonebook}
            alt="film Gif"
            style={{ width: '880px', height: '600px' }}
          />
    </div>
  );
};

export default HomePage;
