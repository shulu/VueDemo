<template>
    <div @click="checkClick" class="invoice-wrap flex flex-column">
        <form @submit.prevent="submitForm" class="invoice-content">
            <h1>New Invoice</h1>
            <!-- Bill From -->
            <div class="bill-form flex flex-column">
                <h4>Bill From</h4>
                <div class="input flex flex-column">
                    <label for="billerStreetAddress">Stree Address</label>
                    <input required type="text" id="billerStreetAddress" v-model="billerStreetAddress">
                </div>
                <div class="location-details flex">
                    <div class="input flex flex-column">
                        <label for="billerCity">Stree Address</label>
                        <input required type="text" id="billerCity" v-model="billerCity">
                    </div>
                    <div class="input flex flex-column">
                        <label for="billerZipCode">Zipcode</label>
                        <input required type="text" id="billerZipCode" v-model="billerZipCode">
                    </div>
                    <div class="input flex flex-column">
                        <label for="billerCountry">Country</label>
                        <input required type="text" id="billerCountry" v-model="billerCountry">
                    </div>
                </div>
            </div>

            <!-- Bill To -->
            <div class="bill-to flex flex-column">
                <h4>Bill To</h4>
                <div class="input flex flex-column">
                    <label for="clientName">Client'sName</label>
                    <input required type="text" id="clientName" v-model="clientName">
                </div>
                <div class="input flex flex-column">
                    <label for="clientEmail">Client's Email</label>
                    <input required type="text" id="clientEmail" v-model="clientEmail">
                </div>
                <div class="input flex flex-column">
                    <label for="clientStreetAddress">Stree Address</label>
                    <input required type="text" id="clientStreetAddress" v-model="clientStreetAddress">
                </div>
                <div class="location-details flex">
                    <div class="input flex flex-column">
                        <label for="clientCity">Client's City</label>
                        <input required type="text" id="clientCity" v-model="clientCity">
                    </div>
                    <div class="input flex flex-column">
                        <label for="clientZipCode">Client's ZipCode</label>
                        <input required type="text" id="clientZipCode" v-model="clientZipCode">
                    </div>
                    <div class="input flex flex-column">
                        <label for="clientCountry">Client's Country</label>
                        <input required type="text" id="clientCountry" v-model="clientCountry">
                    </div>
                </div>
            </div>

            <!-- Invoice Work Details -->
            <div class="invoice-work flex flex-column">
                <div class="payment flex">
                    <div class="input flex flex column">
                        <label for="InvoiceDate">Invoice Date</label>
                        <input required type="text" id="InvoiceDate" v-model="InvoiceDate">
                    </div>
                    <div class="input flex flex column">
                        <label for="paymentTerms">Payment Due Date</label>
                        <select required type="text" id="paymentTerms" v-model="paymentTerms">
                            <option value="30">Net 30 Day</option>
                            <option value="60">Net 60 Day</option>
                        </select>
                    </div>
                </div>
                <div class="input flex flex-column">
                    <label for="billerStreetAddress">Stree Address</label>
                    <input required type="text" id="billerStreetAddress" v-model="billerStreetAddress">
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "InvoiceModal",
    data() {
        return {
            billerStreetAddress: null,
            billerCity: null,
            billerZipCode: null,
            billerCountry: null,
            clientName: null,
            clientEmail: null,
            clientStreetAddress: null,
            clientCity: null,
            clientZipCode: null,
            clientCountry: null,
            invoiceDateUnix: null,
            invoiceDate: null,
            paymentTerms: null,
            paymentDueDateUnix: null,
            paymentDueDate: null,
            productDescription: null,
            invoicePending: null,
            invoiceDraft: null,
            invoiceItemList: [],
            invoiceTotal: 0
        }
    }
}
</script>