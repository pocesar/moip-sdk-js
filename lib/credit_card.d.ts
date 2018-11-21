export default class MoipCreditCard {
    static creditCard: any;
    static setEncrypter(encrypter: any, name: string): typeof MoipCreditCard;
    static setCreditCard(creditCard: any): typeof MoipCreditCard;
    static getCreditCard(): any;
    static pubKey: string;
    static setPubKey(pubKey: string): typeof MoipCreditCard;
    static hash(): any;
    static isValid(): boolean;
    static cardType(): string | null;
}
