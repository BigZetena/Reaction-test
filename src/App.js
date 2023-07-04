
import './style/style.css';

import React, { useEffect, useState } from "react";




const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const res = fetch("https://hp-api.onrender.com/api/characters");
        res.then((data) => data.json()).then((data) => setData(data));
    }, []);

    console.log(data)
  return (
      <div>

      </div>
  );
};

export default App;


