import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Img, ShadowImg } from "./styled";
import loaderBlack from "./img/loader-black.svg";
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";

const UiLoader = ({ theme = "white", isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState();
  useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderBlack);
    }
  }, [theme]);
  return (
    <>
      {isShadow ? (
        <ShadowImg src={loaderIcon} alt="Загрузка" />
      ) : (
        <Img src={loaderIcon} alt="Загрузка" />
      )}
    </>
  );
};

UiLoader.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoader;
