import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "hoc/withErrorApi";
import PeopleList from "components/PeoplePage/PeopleList";
import { getApiResource } from "utils/network";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "services/getPeolpeData";
import { API_PEOPLE, SWAPI_PARAM_PAGE } from "constants/api";
import { useQueryParams } from "../../hooks/useQueryParams";
import PeopleNavigation from "../../components/PeoplePage/PeopleNavigation";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return { id, name, img };
      });
      setPeople(peopleList);
      setPrevPage(res.previous);
      setNextPage(res.next);
      setCurrentPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + SWAPI_PARAM_PAGE + queryPage);
  }, []);
  return (
    <>
      <PeopleNavigation
        currentPage={currentPage}
        prevPage={prevPage}
        nextPage={nextPage}
        getResource={getResource}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
