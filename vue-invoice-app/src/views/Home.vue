<template>
  <div class="home container">
    <!-- Header -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoices</h1>
        <span>There are {{ invoiceDataTotal }} total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex" ref="filter">
          <span
            >Filter by Status:
            <span
              v-if="targetFilter"
              :class="{
                paid: targetFilter === 'Paid',
                draft: targetFilter === 'Draft',
                pending: targetFilter === 'Pending',
              }"
              >{{ targetFilter }}</span
            >
          </span>
          <img src="@/assets/icon-arrow-down.svg" alt="" />
          <ul v-show="filterMenu" class="filter-menu">
            <li @click="filterData">Draft</li>
            <li @click="filterData">Pending</li>
            <li @click="filterData">Paid</li>
            <li @click="filterData">Clear Filter</li>
          </ul>
        </div>
        <div @click="newInvoice()" class="button flex">
          <div class="inner-button flex">
            <img src="@/assets/icon-plus.svg" alt="" />
          </div>
          <span>New Invoices</span>
        </div>
      </div>
    </div>
    <!-- Invoices -->
    <div v-if="filteredData.length > 0">
      <Invoice
        v-for="(invoice, index) in filteredData"
        :key="index"
        v-bind:invoice="invoice"
      />
    </div>
    <div v-else class="empty flex flex-column">
      <img src="@/assets/illustration-empty.svg" alt="" />
      <h3>There is notion here</h3>
      <p>
        Create a new invoice by clicking the New Invoice button and get started
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Invoice from "@/components/Invoice";

export default {
  name: "Home",
  data() {
    return {
      filterMenu: null,
      targetFilter: null,
      filteredData: [],
    };
  },
  components: {
    Invoice,
  },
  created() {
    this.filteredData = this.invoiceData;
    this.CAL_INVOICE_TOTAL();
  },
  methods: {
    ...mapMutations(["TOGGLE_INVOICE", "CAL_INVOICE_TOTAL"]),
    newInvoice() {
      this.TOGGLE_INVOICE();
    },
    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
    filterData(e) {
      const filterType = e.target.innerText;
      this.targetFilter = filterType;
      switch (filterType) {
        case "Pending":
          this.filteredData = this.invoiceData.filter(
            (invoice) => invoice.invoicePending === true
          );
          break;
        case "Paid":
          this.filteredData = this.invoiceData.filter(
            (invoice) => invoice.invoicePaid === true
          );
          break;
        case "Draft":
          this.filteredData = this.invoiceData.filter(
            (invoice) => invoice.invoiceDraft === true
          );
          break;
        default:
          this.targetFilter = null;
          this.filteredData = this.invoiceData;
          break;
      }
    },
  },
  computed: {
    ...mapState(["invoiceData", "invoiceDataTotal"]),
  },
};
</script>


<style lang="scss" scoped>
.home {
  color: #fff;

  .header {
    margin-bottom: 65px;

    .left,
    .right {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
      align-items: center;

      .button,
      .filter {
        align-items: center;

        span {
          font-size: 12px;
        }
      }

      .filter {
        position: relative;
        margin-right: 40px;
        cursor: pointer;

        img {
          margin-left: 12px;
          width: 9px;
          height: 5px;
        }

        .filter-menu {
          width: 120px;
          position: absolute;
          top: 25px;
          list-style: none;
          background-color: #1e2139;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

          li {
            cursor: pointer;
            font-size: 12px;
            padding: 10px 20px;

            &:hover {
              color: #1e2139;
              background-color: #fff;
              border-radius: 10px;
            }
          }
        }
      }

      .button {
        padding: 8px 20px;
        background-color: #7c5dfa;
        border-radius: 40px;

        .inner-button {
          margin-right: 8px;
          border-radius: 50%;
          padding: 8px;
          align-items: center;
          justify-content: center;
          background-color: #fff;

          img {
            width: 10px;
            height: 10px;
          }
        }
      }
    }
  }

  .empty {
    margin-top: 160px;
    align-items: center;

    img {
      width: 214px;
      height: 200px;
    }

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}
</style>