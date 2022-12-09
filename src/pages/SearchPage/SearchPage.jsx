import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { getApiResource } from "utils/network";
import { API_SEARCH } from ".constants/api";
import { withErrorApi } from "hoc/withErrorApi";
import PropTypes from "prop-types";
import { getPeopleId, getPeopleImage } from "services/getPeolpeData";
import SearchPageInfo from "components/SearchPage/SearchPageInfo";
import UiInput from "components/Ui/UiInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  useEffect(() => {
    getResponse("");
  }, []);

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="page__title">Search character</h1>
      <UiInput
        type="text"
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input character's name"
        classes="input"
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
