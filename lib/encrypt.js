(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Encrypt = /** @class */ (function () {
        function Encrypt() {
        }
        Encrypt.setEncrypter = function (encrypter, name) {
            this.encrypter = encrypter;
            this.encrypterName = name;
        };
        Encrypt.encrypt = function (value, pubKey) {
            if (!this.encrypter && !this.encrypterName && typeof JSEncrypt !== 'undefined') {
                this.encrypter = JSEncrypt;
                this.encrypterName = 'js';
            }
            if (this.encrypter && this.encrypterName) {
                switch (this.encrypterName.toLowerCase()) {
                    case 'js':
                    case 'ionic':
                    case 'node':
                        return this.jsEncrypt(value, pubKey);
                    case 'react-native':
                        return this.reactNativeRsa(value, pubKey);
                }
            }
            return Promise.resolve(null);
        };
        Encrypt.jsEncrypt = function (value, pubKey) {
            var _this = this;
            return new Promise(function (resolve) {
                var jsEncrypt = new _this.encrypter({ default_key_size: 2048 });
                jsEncrypt.setPublicKey(pubKey);
                return resolve(jsEncrypt.encrypt(value));
            });
        };
        Encrypt.reactNativeRsa = function (value, pubKey) {
            return this.encrypter.encrypt(value, pubKey);
        };
        return Encrypt;
    }());
    exports.default = Encrypt;
});
//# sourceMappingURL=encrypt.js.map