import MoipValidator from './validator';
import Encrypt from './encrypt';
var MoipCreditCard = /** @class */ (function () {
    function MoipCreditCard() {
    }
    MoipCreditCard.setEncrypter = function (encrypter, name) {
        Encrypt.setEncrypter(encrypter, name);
        return this;
    };
    MoipCreditCard.setCreditCard = function (creditCard) {
        if (creditCard) {
            this.creditCard = Object.assign(creditCard, {
                number: MoipValidator.normalizeCardNumber(creditCard.number)
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
        return Encrypt.encrypt(toEncrypt, this.pubKey);
    };
    MoipCreditCard.isValid = function () {
        return MoipValidator.isValid(this.creditCard);
    };
    MoipCreditCard.cardType = function () {
        var type = MoipValidator.cardType(this.creditCard.number);
        return type ? type.brand : null;
    };
    return MoipCreditCard;
}());
export default MoipCreditCard;
//# sourceMappingURL=credit_card.js.map