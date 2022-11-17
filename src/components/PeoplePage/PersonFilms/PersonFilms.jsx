import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeConcurrentRequests } from "../../../utils/network";
import { Li, Ul } from "./styled";
import UiLoader from "../../Ui/UiLoading";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await makeConcurrentRequests(personFilms);
      setFilmsName(res);
    })();
  }, [personFilms]);

  return (
    <>
      <Ul>
        {filmsName.length > 0 ? (
          filmsName
            .sort((a, b) => a["episode_id"] - b["episode_id"])
            .map(({ title, episode_id, director, edited }) => (
              <Li key={episode_id}>
                <span>
                  Episode {episode_id} : {title}
                </span>
                <span>Director: {director}</span>
              </Li>
            ))
        ) : (
          <UiLoader theme="white" />
        )}
      </Ul>
    </>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};
export default PersonFilms;
