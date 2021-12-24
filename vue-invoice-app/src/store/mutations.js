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
    ADD_INVOICE_DATA(state, payload) {
        state.invoiceData.push(payload)
    },
    SET_CURRENT_INVOICE(state, payload) {
        console.log("this is s c i")
        console.log(payload)
        console.log(state.invoiceData)
        state.currentInvoiceArray = state.invoiceData.filter((invoice) => {
            return invoice.invoiceId === payload;
        })
    },
    TOGGLE_EDIT_INVOICE(state) {
        state.editInvoice = !state.editInvoice;
    },
    DELETE_INVOICE(state, payload) {
        state.invoiceData = state.invoiceData.filter(invoice => invoice.docId !== payload)
    },
    UPDATE_INVOICE_DATA_STATUS(state, payload) {
        state.currentInvoiceArray[0].invoicePending = payload.invoicePending;
        state.currentInvoiceArray[0].invoicePaid = payload.invoicePaid;
    }
}