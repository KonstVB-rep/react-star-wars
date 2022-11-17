import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Div } from "./styled";
import { useSelector } from "react-redux";

const Favorite = () => {
  const [count, setCount] = useState(0);
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  }, [storeData]);

  return (
    <Div>
      <span>{count}</span>
      <Link to="/favorites">
        <img src="/images/bookmark.svg" alt="Favorite list" />
      </Link>
    </Div>
  );
};

export default Favorite;
