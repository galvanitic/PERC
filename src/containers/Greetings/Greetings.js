var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import icon from '../../assets/img/icon-128.png';
var GreetingComponent = /** @class */ (function (_super) {
    __extends(GreetingComponent, _super);
    function GreetingComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: 'dev',
        };
        return _this;
    }
    GreetingComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null,
                "Hello, ",
                this.state.name,
                "!"),
            React.createElement("img", { src: icon, alt: "extension icon" })));
    };
    return GreetingComponent;
}(Component));
export default GreetingComponent;
