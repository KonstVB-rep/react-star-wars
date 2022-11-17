import React from "react";
import PropTypes from "prop-types";
import { Button, Div } from "./styled";
import { getPeoplePageId } from "../../../services/getPeolpeData";
import { Link } from "react-router-dom";
import UiButton from "../../Ui/UiButton";

const PeopleNavigation = ({ currentPage, prevPage, nextPage, getResource }) => {
  const next = () => getResource(nextPage);
  const prev = () => getResource(prevPage);

  return (
    <>
      <h1 className="page__title">People</h1>
      <Div>
        <Link to={`/people/?page=${currentPage - 1}`}>
          <UiButton text="Previous" onClick={prev} disabled={!prevPage} />
        </Link>
        <Link to={`/people/?page=${currentPage + 1}`}>
          <UiButton text="Next" onClick={next} disabled={!nextPage} />
        </Link>
      </Div>
    </>
  );
};

PeopleNavigation.propTypes = {
  currentPage: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  getResource: PropTypes.func,
};

export default PeopleNavigation;
