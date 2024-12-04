import React, { useState } from 'react';

function AddTitle() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setMessage('Title cannot be empty');
    } else {
      // Here you would typically send the title to your backend or update your state
      console.log('Title added:', title);
      setMessage('Title added successfully');
      setTitle(''); // Clear the input field
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddTitle;