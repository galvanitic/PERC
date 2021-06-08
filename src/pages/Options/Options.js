import React from 'react';
import './Options.css';
var Options = function (_a) {
    var title = _a.title;
    return React.createElement("div", { className: "OptionsContainer" },
        title.toUpperCase(),
        " Page");
};
export default Options;
