import * as fb from "@/firebase/firebaseInit";

export default {
    GET_INVOICES({ commit }) {
        const invoiceData = fb.getInvoicesData('invoices');
        console.log(invoiceData)
        commit("SET_INVOICE_DATA", invoiceData)
        commit("INVOICE_LOADED")
    }
}