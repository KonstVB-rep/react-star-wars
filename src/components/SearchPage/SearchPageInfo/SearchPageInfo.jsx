import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import { Li, Ul} from "./styled";
import UiLoader from "../../Ui/UiLoading";

const SearchPageInfo = ({people}) => (
  <>
    {people.length ?
      <Ul>
        {people.map(({id, name, img}) =>
          <Li key = {id}>
            <Link to = {`/react-star-wars/people/${id}`}>
              <img src = {img} alt = {name} />
              <p>{name}</p>
            </Link>
          </Li>
        )
        }
      </Ul> : <UiLoader/>}
  </>
);

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;