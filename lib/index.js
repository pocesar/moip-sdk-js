var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validator", "./credit_card"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var validator_1 = __importDefault(require("./validator"));
    exports.MoipValidator = validator_1.default;
    var credit_card_1 = __importDefault(require("./credit_card"));
    exports.MoipCreditCard = credit_card_1.default;
});
//# sourceMappingURL=index.js.map