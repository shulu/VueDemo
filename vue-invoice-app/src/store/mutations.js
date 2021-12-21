export default {
    TOGGLE_INVOICE(state) {
        state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_MODAL(state) {
        state.modalActive = !state.modalActive
    },
    SET_INVOICE_DATA(state, payload) {
        state.invoiceData = payload
        console.log("this is set data")
        console.log(state.invoiceData)
    },
    INVOICE_LOADED(state) {
        state.invoiceLoaded = true
    }
}