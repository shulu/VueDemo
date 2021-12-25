export default {
    TOGGLE_INVOICE(state) {
        state.invoiceModal = !state.invoiceModal;
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
    FILTER_PENDING_DATA(state) {
        state.invoiceData = state.invoiceData.filter(invoice => invoice.invoicePending === true)
    },
    FILTER_PAID_DATA(state) {
        state.invoiceData = state.invoiceData.filter(invoice => invoice.invoicePaid === true)
    },
    FILTER_DRAFT_DATA(state) {
        state.invoiceData = state.invoiceData.filter(invoice => invoice.invoiceDraft === true)
    },
    CAL_INVOICE_TOTAL(state) {
        state.invoiceDataTotal = state.invoiceData.length  
    },
    ADD_INVOICE_DATA(state, payload) {
        state.invoiceData.unshift(payload)
    },
    SET_CURRENT_INVOICE(state, payload) {
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
        state.currentInvoiceArray[0].invoiceDraft = payload.invoiceDraft;
    }
}