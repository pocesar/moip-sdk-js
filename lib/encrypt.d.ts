export default class Encrypt {
    static encrypter: any;
    static encrypterName: string;
    static setEncrypter(encrypter: any, name: string): void;
    static encrypt(value: any, pubKey: string): any;
    static jsEncrypt(value: any, pubKey: string): Promise<{}>;
    static reactNativeRsa(value: any, pubKey: string): any;
}
