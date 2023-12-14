import { useContext } from 'react';
import UserContext from '../context/UserContext.jsx'

function Welcome() {
  const [name, setName] = useContext(UserContext);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      setName('');
    } else {
      setName(e.target.value);
    }
  };

  return (
    <>
      {name && <h1>Welcome {name}!</h1>}
      <div className='form-container'>
        <label htmlFor="nameInput">Your Name</label>
        <input type="text" value={name} onChange={handleInput} />
      </div>
    </>
  );
}

export default Welcome;
