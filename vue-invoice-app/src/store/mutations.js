export default {
    TOGGLE_INVOICE(state) {
        state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_MODAL(state) {
        state.modalActive = !state.modalActive
    },
    SET_INVOICE_DATA(state, payload) {
        state.invoiceData = payload
    },
    INVOICE_LOADED(state) {
        state.invoiceLoaded = true
    },
    SET_CURRENT_INVOICE(state, payload) {
        state.currentInvoiceArray = state.invoiceData.filter((invoice) => {
            return invoice.invoiceId === payload;
        })
    }
}