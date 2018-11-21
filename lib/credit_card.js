var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validator", "./encrypt"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var validator_1 = __importDefault(require("./validator"));
    var encrypt_1 = __importDefault(require("./encrypt"));
    var MoipCreditCard = /** @class */ (function () {
        function MoipCreditCard() {
        }
        MoipCreditCard.setEncrypter = function (encrypter, name) {
            encrypt_1.default.setEncrypter(encrypter, name);
            return this;
        };
        MoipCreditCard.setCreditCard = function (creditCard) {
            if (creditCard) {
                this.creditCard = Object.assign(creditCard, {
                    number: validator_1.default.normalizeCardNumber(creditCard.number)
                });
            }
            return this;
        };
        MoipCreditCard.getCreditCard = function () {
            return this.creditCard;
        };
        MoipCreditCard.setPubKey = function (pubKey) {
            this.pubKey = pubKey;
            return this;
        };
        MoipCreditCard.hash = function () {
            var _a = this.creditCard, number = _a.number, cvc = _a.cvc, expirationMonth = _a.expirationMonth, expirationYear = _a.expirationYear;
            if (!this.pubKey ||
                !number ||
                !cvc ||
                !expirationMonth ||
                !expirationYear) {
                return Promise.resolve(null);
            }
            var toEncrypt = [
                "number=" + number,
                "cvc=" + cvc,
                "expirationMonth=" + expirationMonth,
                "expirationYear=" + expirationYear,
            ].join('&');
            return encrypt_1.default.encrypt(toEncrypt, this.pubKey);
        };
        MoipCreditCard.isValid = function () {
            return validator_1.default.isValid(this.creditCard);
        };
        MoipCreditCard.cardType = function () {
            var type = validator_1.default.cardType(this.creditCard.number);
            return type ? type.brand : null;
        };
        return MoipCreditCard;
    }());
    exports.default = MoipCreditCard;
});
//# sourceMappingURL=credit_card.js.map