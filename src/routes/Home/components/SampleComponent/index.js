// @flow
import React from "react";
import { injectIntl, intlShape } from "react-intl";
import type { HomeProps } from "../../../../../types";
export const SampleComponent = ({intl, dummyData}:HomeProps) => {
    const { results } = dummyData || [];
    const { formatMessage } = intl;
    return (
        <div>
            <h1> {formatMessage({id:"app.home.hello"})} Eman </h1>

            { results.map((obj, index)=>{
                    return (
                        <div key={index}>
                            <h1>{obj.first}</h1>
                            <div><img src={obj.picture.large}/></div>
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