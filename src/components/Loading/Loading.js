import React from "react";
import { ReactComponent as Spinner } from "../../assets/images/spinner.svg";
// import Spinner from "../../assets/images/spinner.svg";

const Loading = () => {
  return (
    <div className="spinner-wrapper">
      <Spinner />
    </div>
  );
};

export default Loading;
