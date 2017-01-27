import React from "react";
import * as css from "./SampleComponent.scss";
import classnames from "classnames";
export const SampleComponent = ({toggleModal}) => {
    return (
       <div className="row">
            <button className="btn btn-success" onClick={toggleModal}>
                Click Me
            </button>

       </div>
    );
};
export default SampleComponent;
