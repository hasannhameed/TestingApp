import React, { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>Good to see you</p>}
      {changedText && <p>Text changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}

export default Greeting;
