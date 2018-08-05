"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }
        // The gray background
        var backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };
        // The modal "window"
        var modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };
        return (react_1.default.createElement("div", { className: "backdrop", style: { backdropStyle: backdropStyle } },
            react_1.default.createElement("div", { className: "modal", style: { modalStyle: modalStyle } },
                this.props.children,
                react_1.default.createElement("div", { className: "footer" },
                    react_1.default.createElement("button", { onClick: this.props.onClose }, "Close")))));
    };
    return Modal;
}(react_1.default.Component));
exports.default = Modal;
Modal.propTypes = {
    onClose: prop_types_1.default.func.isRequired,
    show: prop_types_1.default.bool,
    children: prop_types_1.default.node
};
//# sourceMappingURL=modal.js.map