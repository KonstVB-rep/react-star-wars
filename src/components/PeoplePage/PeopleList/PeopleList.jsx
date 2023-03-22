import React from "react";
import PropTypes from "prop-types";
import { Img, Li, Ul } from "./styled";
import { Link } from "react-router-dom";
import UiLoader from "../../Ui/UiLoading";

const PeopleList = ({ people }) => {

  return (
    <Ul>
      {people.length ? people.map(({ id, name, img }) => (
        <Li key={id}>
          <Link to={`/react-star-wars/people/${id}`} className="link">
            <Img src={img} alt="" />
            <p>{name}</p>
          </Link>
        </Li>
      )) : <UiLoader/>}
    </Ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
