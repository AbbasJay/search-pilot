import React, { useEffect, useState } from "react";

import { getRandomIds } from "../../utils/helpers";

import "./styles.css";

const DisplayGifs = ({ gifs = [] }) => {
  let columnOne;
  let columnTwo;
  let columnThree;

  const [displayGifIds, setDisplayGifIds] = useState([]);

  useEffect(() => {
    const gifIds = getRandomIds(gifs, 7);

    setDisplayGifIds(gifIds);
  }, [gifs]);

  if (displayGifIds) {
    let newIds = [...displayGifIds];

    columnOne = newIds.splice(0, 1);
    columnTwo = newIds.splice(0, 2);
    columnThree = newIds.splice(0, 4);
  }

  const renderColumnOne = () => {
    return columnOne.map((id, index) => {
      return (
        <img
          alt={"column-one"}
          className={"gif"}
          key={index}
          src={`https://media.giphy.com/media/${id}/giphy.gif`}
        />
      );
    });
  };

  const renderColumnTwo = () => {
    return columnTwo.map((id, index) => {
      return (
        <img
          alt={"column-two"}
          className={"gif"}
          key={index}
          src={`https://media.giphy.com/media/${id}/giphy.gif`}
        />
      );
    });
  };

  const renderColumnThree = () => {
    return columnThree.map((id, index) => {
      return (
        <img
          alt={"column-three"}
          className={"gif"}
          key={index}
          src={`https://media.giphy.com/media/${id}/giphy.gif`}
        />
      );
    });
  };

  return (
    <div className={"gif-container"}>
      {displayGifIds && (
        <>
          <div className={"column-one"}>{renderColumnOne()}</div>
          <div className={"column-two"}>{renderColumnTwo()}</div>
          <div className={"column-three"}>{renderColumnThree()}</div>
        </>
      )}
    </div>
  );
};

export default DisplayGifs;
