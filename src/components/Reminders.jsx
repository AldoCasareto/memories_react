import { useState } from 'react';

const Reminders = () => {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReminder = {
      id: new Date().getTime(),
      title,
      description,
    };
    setList(list.concat(newReminder));
  };
  return (
    <div>
      <h1>Reminders</h1>
      <form action='' onSubmit={handleSubmit}>
        What do you want to remember?
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Description
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {list.map((l) => (
        <div className='list'>
          <div className='card' key={l.id}>
            <p>Title: {l.title}</p>
            <p>Description {l.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reminders;
