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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
// AddPhraseModal
var AddPhraseModal = /** @class */ (function (_super) {
    __extends(AddPhraseModal, _super);
    function AddPhraseModal(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { phrase: '' };
        _this.setPhrase = _this.setPhrase.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    AddPhraseModal.prototype.setPhrase = function (event) {
        var target = event.target;
        if (!target.matches('#input-phrase')) {
            this.setState({
                phrase: target.value,
            });
        }
    };
    AddPhraseModal.prototype.handleSubmit = function (event) {
        this.props.handleAddPhrase(this.state.phrase);
        event.preventDefault();
    };
    AddPhraseModal.prototype.render = function () {
        // Render nothing if isOpen is false
        if (!this.props.isOpen) {
            return null;
        }
        return (React.createElement("section", { className: "backdrop" },
            React.createElement("form", { className: "modal" },
                React.createElement("label", null, "Phrase"),
                React.createElement("input", { id: "input-phrase", onChange: this.setPhrase, onSubmit: this.handleSubmit }),
                React.createElement("input", { id: "modal-submit", value: "Add", type: "submit", onSubmit: this.handleSubmit }),
                React.createElement("button", { id: "modal-cancel", value: "Cancel", onClick: this.props.closeModal }, "Cancel"))));
    };
    return AddPhraseModal;
}(React.Component));
exports.AddPhraseModal = AddPhraseModal;
