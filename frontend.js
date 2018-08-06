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
var ReactDOM = __importStar(require("react-dom"));
var addPhraseModal_1 = require("./addPhraseModal");
// PhraseStorage that controls AddPhraseModal
var PhraseStorage = /** @class */ (function (_super) {
    __extends(PhraseStorage, _super);
    function PhraseStorage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            modalIsOpen: false,
            phrases: [],
        };
        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        _this.handleAddPhrase = _this.handleAddPhrase.bind(_this);
        return _this;
    }
    PhraseStorage.prototype.openModal = function (event) {
        this.setState({ modalIsOpen: true });
    };
    PhraseStorage.prototype.closeModal = function (event) {
        this.setState({ modalIsOpen: false });
    };
    // AddPhraseModal passes its phrase as its state
    PhraseStorage.prototype.handleAddPhrase = function (phrase) {
    };
    PhraseStorage.prototype.render = function () {
        return (React.createElement("div", { id: "add-view" },
            React.createElement("button", { id: "add-view-button", onClick: this.openModal }, "Add View"),
            React.createElement(addPhraseModal_1.AddPhraseModal, { isOpen: this.state.modalIsOpen, closeModal: this.closeModal, addPhrase: this.addPhrase }),
            React.createElement(PhraseList, { phraseArray: this.state.phrases })));
    };
    return PhraseStorage;
}(React.Component));
ReactDOM.render(React.createElement(PhraseStorage, null), document.getElementById('list-view'));
