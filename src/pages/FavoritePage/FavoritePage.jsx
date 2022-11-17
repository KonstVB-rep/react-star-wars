import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { Div } from "./styled";

const FavoritePage = () => {
  const [people, setPeople] = useState([]);
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    if (arr.length) {
      const res = arr.map((item) => ({ id: item[0], ...item[1] }));
      setPeople(res);
    }
  }, []);

  return (
    <Div>
      <PeopleList people={people} />
    </Div>
  );
};

export default FavoritePage;
