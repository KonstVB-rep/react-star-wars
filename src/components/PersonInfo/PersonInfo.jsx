import React from "react";
import PropTypes from "prop-types";
import { UL } from "./styled";
import UiLoader from "../Ui/UiLoading";

const PersonInfo = ({ personInfo }) => {
  return (
    <>
      <UL>
        {personInfo.length > 0 ? (
          personInfo.map(
            ({ title, data }) =>
              data && (
                <li key={title}>
                  {title}: {data}
                </li>
              )
          )
        ) : (
          <UiLoader theme="white" />
        )}
      </UL>
    </>
  );
};

PersonInfo.propTypes = {
  personInfo: PropTypes.array,
};

export default PersonInfo;
