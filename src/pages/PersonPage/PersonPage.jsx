import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getApiResource } from "utils/network";
import { API_PEOPLE } from "constants/api";
import * as PropTypes from "prop-types";
import { BoxContent, InfoBox, SpanPersonName } from "./styled";
import { withErrorApi } from "hoc/withErrorApi";
import { getPeopleImage } from "services/getPeolpeData";
import PersonInfo from "components/PersonInfo";
import PersonPhoto from "components/PersonPhoto";
import PersonLinkBack from "components/PeoplePage/PersonLinkBack";
import PersonFilms from "components/PeoplePage/PersonFilms/PersonFilms";
import { useSelector } from "react-redux";
import UiLoader from "../../components/Ui/UiLoading";

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PEOPLE}/${id}`);
      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Birth year", data: res.birth_year },
          { title: "Skin color", data: res.skin_color },
          { title: "Hair color", data: res.hair_color },
          { title: "Gender", data: res.gender },
          { title: "Eye color", data: res.eye_color },
          { title: "Mass", data: res.mass },
        ]);
        setPersonPhoto(getPeopleImage(id));
        setPersonName(res.name);

        res.films.length && setPersonFilms(res.films);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <BoxContent>
        <InfoBox>
          <SpanPersonName className="person-name">{personName}</SpanPersonName>
          {personInfo ? (
            <div className="person-info">
              <PersonPhoto
                personPhoto={personPhoto}
                personName={personName}
                id={id}
                personFavorite={personFavorite}
                setPersonFavorite={setPersonFavorite}
              />
              <PersonInfo personInfo={personInfo} />
              {personFilms && (
                <>
                  <PersonFilms personFilms={personFilms} />
                </>
              )}
            </div>
          ) : <UiLoader/>}
        </InfoBox>
      </BoxContent>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
