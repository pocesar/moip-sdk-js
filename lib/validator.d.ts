export default class MoipValidator {
    static readonly _eloBins: string[];
    static readonly _eloBinRanges: number[][];
    static readonly _hiperBins: string[];
    static readonly _hipercardBins: string[];
    static readonly _masterCardRanges: number[];
    static _isInEloBinRanges(bin: any): boolean;
    static _isInMasterCardRanges(bin: any): boolean;
    static normalizeCardNumber(creditCardNumber: any): any;
    static isValidNumber(creditCardNumber: any): boolean;
    static isSecurityCodeValid(creditCardNumber: any, cvc: any): boolean;
    static isExpiryDateValid(expiryMonth: any, expiryYear: any): boolean;
    static isExpiredDate(expireMonth: any, year: any): boolean;
    static isValid(creditCard: any): boolean;
    static cardType(creditCardNumber: any, loose?: any): {
        brand: string;
    } | null;
}
