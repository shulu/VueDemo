import * as fb from "@/firebase/firebaseInit";

export default {
    GET_INVOICES({ commit }) {
        fb.getInvoicesData('invoices').then((res) => {
            commit("SET_INVOICE_DATA", res)
        });
        commit("INVOICE_LOADED")
    },
    UPDATE_INVOICE({ commit, dispatch }, { docId, routeId}) {
        commit("INVOICE_INVOICE", docId);
        dispatch("GET_INVOICE");
        commit("TOGGLE_INVOICE");
        commit("TOGGLE_EDIT_INVOICE");
        commit("SET_CURRENT_INVOICE", routeId)
    }
}