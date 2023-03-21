import React from "react";
import PropTypes from "prop-types";
import { Img, Li, Ul } from "./styled";
import { Link } from "react-router-dom";

const PeopleList = ({ people }) => {

  return (
    <Ul>
      {people.map(({ id, name, img }) => (
        <Li key={id}>
          <Link to={`/react-star-wars/people/${id}`} className="link">
            <Img src={img} alt="" />
            <p>{name}</p>
          </Link>
        </Li>
      ))}
    </Ul>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
