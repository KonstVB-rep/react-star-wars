import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { Div, Paragraph } from "./styled";

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
    <>
      <h1 className="page__title">FavoritePage</h1>
      <Div>
        {people.length ? (
          <PeopleList people={people} />
        ) : (
          <Paragraph>Favorite list is empty</Paragraph>
        )}
      </Div>
    </>
  );
};

export default FavoritePage;
