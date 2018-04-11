import * as JSQR from 'jsQR';

export namespace OcQrCode {
    import customElement = Polymer.decorators.customElement;
    import property = Polymer.decorators.property;
    import observe = Polymer.decorators.observe;

    @customElement('oc-qr-code-scanner')
    class OcQrCodeScanner extends Polymer.Element {
        @property({type: Object})
        private imageData: ImageData;

        @property({type: Object})
        private qrCode: any;

        @observe('imageData')
        private onImageData(imageData: ImageData) {
            const code = JSQR.default(imageData.data, imageData.width, imageData.height);
        }
    }
}

