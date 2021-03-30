/**
 * Secure message.
 *
 * https://afaan.dev/secure-message
 *
 * (c) Afaan Bilal
 */

new Vue({
    el: '#app',
    data: {
        decError: '',
        enc: {
            key: '',
            message: '',
            encrypted: '',
        },
        dec: {
            key: '',
            message: '',
            encrypted: '',
        },
    },
    methods: {
        encReset() {
            this.enc.key = ''
            this.enc.message = ''
            this.enc.encrypted = ''
        },
        decReset() {
            this.dec.key = ''
            this.dec.message = ''
            this.dec.encrypted = ''
        },
        encMessage() {
            this.enc.encrypted = CryptoJS.AES.encrypt(this.enc.message, this.enc.key).toString()
        },
        decMessage() {
            this.dec.message = CryptoJS.AES.decrypt(this.dec.encrypted, this.dec.key).toString(CryptoJS.enc.Utf8)
            this.decError = this.dec.message ? '' : 'The key or encrypted message is invalid.'
        },
    }
})
