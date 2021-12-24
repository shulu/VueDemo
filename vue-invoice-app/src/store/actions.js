import * as fb from "@/firebase/firebaseInit";

export default {
    async ADD_INVOICE({ commit },  docData) {
        const docId = await fb.addInvoicesData('invoices', docData);
        docData.docId = docId;
        commit("ADD_INVOICE_DATA", docData);
        commit("TOGGLE_INVOICE");
        commit("TOGGLE_EDIT_INVOICE");
    },
    async GET_INVOICES({ commit }) {
        console.log("did i run")
        await fb.getInvoicesData('invoices').then((res) => {
            commit("SET_INVOICE_DATA", res)
        });
        commit("INVOICE_LOADED")
    },
    async UPDATE_INVOICE_STATUS({ commit }, {docId, updateData}) {
        await fb.updateInvoice("invoices", docId, updateData).then((res) => {
            if (res) {
                commit("UPDATE_INVOICE_DATA_STATUS", updateData);    
            }
        })
    },
    async UPDATE_INVOICE({ commit, dispatch }, { docId, routeId, updateData }) {
        await fb.updateInvoice("invoices", docId, updateData).then( async (res) => {
            if (res) {
                await dispatch("GET_INVOICES");
                commit("TOGGLE_INVOICE");
                commit("TOGGLE_EDIT_INVOICE");
                commit("SET_CURRENT_INVOICE", routeId)
            }
        });
    },
    async DELETE_INVOICE(){}
}