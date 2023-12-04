import React, { useEffect, useState } from 'react';
import './introduce.css';

const Introduce = () => {
  const [name, setName] = useState("");


  useEffect(() => {
    const fullName = "Hello, I'm Oumou DIAKHABY";


    let i = 0;

    const nameInterval = setInterval(() => {
      setName(fullName.substring(0, i + 1));
      i += 1;
      if (i === fullName.length) {
        clearInterval(nameInterval);
      }
    }
      , 50);

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
        <p className='mypres'>Passionate about web development, looking for new challenges</p>
      </div>
    </div>
  );
}

export default Introduce;
