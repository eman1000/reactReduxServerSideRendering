import React from "react";
import { injectIntl, intlShape } from "react-intl";
export const SampleComponent = ({intl, updateMessages}) => {
	const { formatMessage } = intl;
    return (
       <div >
            <h1>{ formatMessage({id:"app.home.hello"})} JOhn Doe </h1>
            <button onClick={()=>updateMessages("en-UP")}>Translate</button>
            <br/>
       </div>
    );
};
SampleComponent.propTypes = {
    intl   : intlShape.isRequired
};
export default injectIntl(SampleComponent);