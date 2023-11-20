import React, { useEffect, useState } from 'react';
import './introduce.css';

const Introduce = () => {
  const [name, setName] = useState("");
  const [presentation, setPresentation] = useState("");

  useEffect(() => {
    const fullName = "Hello, I'm Oumou DIAKHABY";
    const presentationText = "Passionate about web development, I'am looking for new challenges.";

    let i = 0;

    const nameInterval = setInterval(() => {
      setName(fullName.substring(0, i + 1));
      i += 1;
      if (i === fullName.length) {
        clearInterval(nameInterval);

        let j = 0;
        const presentationInterval = setInterval(() => {
          setPresentation(presentationText.substring(0, j + 1));
          j += 1;
          if (j === presentationText.length) clearInterval(presentationInterval);
        }, 10);
      }
    },25);

    return () => {
      clearInterval(nameInterval);
    };
  }, []); 

  return (
    <div className='introduce-container'>
      <div className="myname">
        <h1>{name}</h1>
      </div>
      <div className="presentation">
        <p className='mypres'>{presentation}</p>
      </div>
    </div>
  );
}

export default Introduce;
