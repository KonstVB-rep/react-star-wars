import React from "react";
import { Div, FavoriteIcon, ImgPerson } from "./styled";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removePersonFromFavorite,
  setPersonToFavorite,
} from "../../store/actions";

const PersonPhoto = ({
  personPhoto,
  personName,
  id,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(id));
      setPersonFavorite(!personFavorite);
    } else {
      dispatch(
        setPersonToFavorite({
          [id]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(!personFavorite);
    }
  };

  return (
    <Div>
      {personPhoto && <ImgPerson src={personPhoto} alt={personName} />}
      <FavoriteIcon
        src={personFavorite ? "/images/unFavorite.svg" : "/images/favorite.svg"}
        onClick={dispatchFavoritePeople}
        alt="favorite"
      />
    </Div>
  );
};

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  id: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};
export default PersonPhoto;
