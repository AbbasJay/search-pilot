import React, { useState } from "react";
import axios from "axios";

import DisplayGifs from "../../components/displayGifs";

import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  const handleSubmit = async () => {
    if (searchTerm.length === 0) {
      return;
    }

    setLoading(true);

    const response = await axios(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        api_key: "oFqRXuHwmyNsw18nE4n5l1vZf2YWrm02",
        q: searchTerm,
        limit: 50,
      },
    });

    setGifs(response.data.data);
    setLoading(false);
  };

  return (
    <div className={"app-container"}>
      <div className={"search-bar"}>
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button onClick={handleSubmit}>Click</button>
      </div>
      {loading ? "loading..." : gifs.length > 0 && <DisplayGifs gifs={gifs} />}
    </div>
  );
};

export default App;
