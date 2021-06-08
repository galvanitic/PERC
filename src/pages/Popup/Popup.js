import React from 'react';
import logo from '../../assets/img/logo.png';
import P from '../../assets/img/P.png';
import E from '../../assets/img/E.png';
import R from '../../assets/img/R.png';
import C from '../../assets/img/C.png';
import './Popup.css';
var Content = function (props) {
    var _a = React.useState(true), loaderState = _a[0], chLoaderState = _a[1];
    var _b = React.useState(false), loaderState2 = _b[0], chLoaderState2 = _b[1];
    var _c = React.useState([P, E, R, C, logo]), images = _c[0], setImages = _c[1];
    var _d = React.useState(0), index = _d[0], setIndex = _d[1];
    var bootSequence = function () {
        new Promise(function () { setTimeout(function () { chLoaderState(false); }, 1500); })
            .then(function () { chLoaderState2(true); })
            .then(function () { setTimeout(function () { chLoaderState2(false); }, 1500); });
        setInterval(function () {
            var newActiveIndex = index === 3 ? 0 : index + 1;
            setIndex(newActiveIndex);
        }, 150);
    };
    var logIt = function () {
        // chrome.browserAction.onClicked.addListener(()=>console.log('Uhhh, hi...'));
        window.open("newtab.html", "_blank");
    };
    var openSite = function () {
        // chrome.browserAction.onClicked.addListener(()=>console.log('Uhhh, hi...'));
        window.open("https://utdirect.utexas.edu/apps/registrar/course_schedule/20212", "_blank");
    };
    var scrape = function () {
        chrome.runtime.sendMessage({ message: "changeColor" }, function (response) {
            console.log(response);
        });
    };
    React.useEffect(function () {
        bootSequence();
    }, [index, loaderState, loaderState2, bootSequence]);
    if (!loaderState && !loaderState2) {
        //Show buttons
        return (React.createElement("div", { className: "popup-actions" },
            React.createElement("button", { onClick: logIt, className: "schedule-bttn" }, "MY SCHEDULE"),
            React.createElement("button", { className: "degree-bttn" }, "MY DEGREE"),
            React.createElement("button", { className: "resources-bttn", onClick: openSite }, "SCRAPE")));
    }
    else if (!loaderState && loaderState2) {
        return (React.createElement("img", { src: images[4], className: "App-logo", alt: "logo" }));
    }
    else {
        // Show loader
        return (React.createElement("img", { src: images[index], className: "App-logo", alt: "logo" }));
    }
};
var Popup = function (_a) {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Content, null))));
};
export default Popup;
