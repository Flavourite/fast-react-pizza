import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="texe-stone-600 mb-4 text-sm md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        className="input w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary" to="/order/new">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
