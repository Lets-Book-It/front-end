import React, { useState } from 'react';

const ProfileForm = () => {
  const [genre, setGenre] = useState('');
  const [numBooks, setNumBooks] = useState('');
  const [favAuthor, setFavAuthor] = useState('');
  const [booksToRead, setBooksToRead] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(genre, numBooks, favAuthor, booksToRead);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What genre of books do you like?
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </label>
      <label>
        How many books have you read?
        <input
          type="number"
          value={numBooks}
          onChange={(e) => setNumBooks(e.target.value)}
        />
      </label>
      <label>
        Who is your favorite author?
        <input
          type="text"
          value={favAuthor}
          onChange={(e) => setFavAuthor(e.target.value)}
        />
      </label>
      <label>
        What books would you most like to read?
        <input
          type="text"
          value={booksToRead}
          onChange={(e) => setBooksToRead(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;