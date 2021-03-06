// @flow
import React from "react";
import { injectIntl, intlShape } from "react-intl";
import type { HomeProps } from "../../../../../types";

import * as css from "./SampleComponent.scss";
export const SampleComponent = ({intl, dummyData}:HomeProps) => {
    const { results } = dummyData || [];
    const { formatMessage } = intl;
    return (
        <div>
            <h1> {formatMessage({id:"app.home.hello"})} John Doe </h1>

            { results.map((obj, index)=>{
                    return (
                        <div key={index}>
                            <h1 className={css.headerText}>Some Heading</h1>
                            <div></div>
                        </div>
                    );
               })
            }
       </div>
    );
};
SampleComponent.propTypes = {
    intl   : intlShape.isRequired
};
export default injectIntl(SampleComponent);