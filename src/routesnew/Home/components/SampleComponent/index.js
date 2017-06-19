import React from "react";
import * as css from "./SampleComponent.scss";
import classnames from "classnames";
export const SampleComponent = ({toggleModal}) => {
    return (
       <div className={`row ${css.wrapper}`}>
            <h1>Simple React Starter Kit Have Fun!</h1>
            <br/>
            <button className="btn btn-success" onClick={toggleModal}>
                Click Me
            </button>
       </div>
    );
};
export default SampleComponent;
