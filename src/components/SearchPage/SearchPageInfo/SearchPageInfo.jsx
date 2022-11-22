import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {H2, Li, Ul} from "./styled";

const SearchPageInfo = ({people}) => (
  <>
    {people.length ?
      <Ul>
        {people.map(({id, name, img}) =>
          <Li key = {id}>
            <Link to = {`/people/${id}`}>
              <img src = {img} alt = {name} />
              <p>{name}</p>
            </Link>
          </Li>
        )
        }
      </Ul> : <H2>No results</H2>}
  </>
);

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;