import * as fb from "@/firebase/firebaseInit";

export default {
    GET_INVOICES({ commit }) {
        fb.getInvoicesData('invoices').then((res) => {
            commit("SET_INVOICE_DATA", res)
        });
        commit("INVOICE_LOADED")
    }
}