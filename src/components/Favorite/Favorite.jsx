import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Div } from "./styled";
import { useSelector } from "react-redux";
import FavoriteIcon from "./img/bookmark.svg";

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
      <Link to="/react-star-wars/favorites">
        <img src={FavoriteIcon} alt="Favorite list" />
      </Link>
    </Div>
  );
};

export default Favorite;
