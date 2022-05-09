<template>
  <v-row>
    <v-col cols="12" md="12" lg="12" xl="12" sm="12 pa-0 "
      ><v-card
        class="rounded-xl elevation-0 dashboard-page ma-0 pa-0 pb-3 mx-3"
        color="transparent"
      >
        <v-row dense>
          <v-col
            cols="12"
            md="12"
            lg="12"
            xl="12"
            sm="12"
            class="text-center pa-0 ma-0"
          >
            <v-card
              color="transparent"
              class="rounded-xl elevation-0 text-center mb-2"
            >
              <v-row no-gutters>
                <v-col
                  xl="3"
                  lg="3"
                  sm="6"
                  md="6"
                  cols="12"
                  v-for="(item, i) in firstRowItems"
                  :key="i"
                  class="text-left"
                >
                  <v-tooltip
                    content-class="vue-tooltip text-subtitle-1 rounded-lg px-0 pl-1"
                    :color="item.innerColor"
                    bottom
                    min-width="250"
                    nudge-bottom="-9"
                  >
                    <template v-slot:activator="{ on }">
                      <v-card
                        v-on="on"
                        class="align-center mx-0 mb-1 mt-2 ml-5 mr-5 mx-2 rounded-lg elevation-0 d-flex px-2"
                        :color="item.firstCardColor"
                        height="130"
                        width="auto"
                      >
                        <v-row no-gutters>
                          <v-col cols="9" xl="9" lg="9" sm="9" md="9	">
                            <v-card
                              class="elevation-0 rounded-lg pb-0 pt-1 pl-1 text-left; justify-left"
                              heigh="auto"
                              :color="item.firstCardColor"
                            >
                              <v-card-text
                                class="text-wrap ma-0 pa-1 font-weight-bold text-h4 pb-0 mb-0"
                              >
                                {{ item.title }}
                              </v-card-text>

                              <v-card-text class="text-no-wrap ma-0 pa-0 ml-2">
                                <div
                                  style="
                                    margin-right: 5px;

                                    text-align: left;
                                  "
                                  class="mt-0 pt-0 text-left text-h5 font-weight-bold text-nowrap"
                                >
                                  <span
                                    v-if="item.value.toString().includes('-')"
                                    class="text-danger text-h6 font-weight-bold"
                                    >{{ item.value }}</span
                                  >
                                  <span v-else>{{ item.value }}</span>
                                </div>
                                <div
                                  v-if="item.title == 'T. Customer Acct.'"
                                  style="
                                    margin-right: 5px;

                                    text-align: left;
                                  "
                                  class="mt-0 mt-0 text-left text-h5 font-weight-bold text-nowrap"
                                >
                                  <span></span>
                                  <span>{{
                                    item.totalNumberOfCustomerAccount
                                  }}</span>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col
                            cols="3"
                            xl="3"
                            lg="3"
                            sm="3"
                            md="3"
                            class="mt-0 text-center"
                          >
                            <v-card
                              class="elevation-0 rounded-lg my-2 mr-0 mt-4 pa-3 d-flex justify-center"
                              :color="item.innerColor"
                              height="auto"
                              width="65"
                            >
                              <v-card
                                class="elevation-0 rounded-lg text-center"
                                height="30"
                                width="30"
                                :color="item.innestColor"
                              >
                                <v-icon color="white" size="23" class="mt-1"
                                  >{{ item.icon }}
                                </v-icon>
                              </v-card>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-card>
                    </template>
                    <v-row
                      no-gutters
                      align="center"
                      justify="start"
                      class="ma-0 pa-0"
                    >
                      <v-col
                        cols="1"
                        lg="1"
                        xl="1"
                        sm="1"
                        md="1"
                        class="mx-0 mr-3"
                      >
                        <span>
                          <v-avatar
                            :color="item.firstCardColor"
                            size="28"
                            class="ml-0 pl-0"
                          >
                            <v-icon size="18">mdi-wallet-plus</v-icon></v-avatar
                          >
                        </span>
                      </v-col>
                      <v-col cols="9" lg="10" xl="10" sm="10" md="10">
                        <v-card class="elevation-0 rounded-xl px-0">
                          <v-card-text
                            class="text-h6 py-0 pr-0 my-0 font-weight-bold ml-0 text-nowrap"
                          >
                            <div class="my-0 py-0">
                              <span class="text-h6 mx-0 px-0">
                                Total Amount :</span
                              >
                              <span
                                class="text-h6 text-danger font-weight-bold py-0 my-0"
                                v-if="item.value.toString().includes('-')"
                              >
                                {{ item.value }} </span
                              ><span
                                class="text-h6 font-weight-bold py-0"
                                v-else
                              >
                                {{ item.value }}
                              </span>
                            </div>

                            <div
                              v-if="item.title == 'T. Customer Acct.'"
                              class="py-0 my-0"
                              style="margin-top: 0px !important"
                            >
                              <span class="text-h6 py-0 my-0">
                                Total Customers:</span
                              >
                              <span class="text-h6 font-weight-bold">
                                {{ item.totalNumberOfCustomerAccount }}</span
                              >
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-card>
            <v-card
              color="transparent"
              class="rounded-xl elevation-0 text-center mb-2"
            >
              <v-row no-gutters>
                <v-col
                  xl="3"
                  lg="3"
                  sm="6"
                  md="6"
                  cols="12"
                  v-for="(item, i) in secondRowItems"
                  :key="i"
                  class="text-left"
                >
                  <v-tooltip
                    content-class="vue-tooltip text-subtitle-1 rounded-lg px-0 pl-1"
                    :color="item.innerColor"
                    bottom
                    min-width="200"
                    nudge-bottom="-9"
                  >
                    <template v-slot:activator="{ on }">
                      <v-card
                        v-on="on"
                        class="align-center mx-0 mb-1 mt-2 ml-5 mr-5 mx-2 rounded-lg elevation-0 d-flex px-2"
                        :color="item.firstCardColor"
                        height="130"
                        width="auto"
                      >
                        <v-row no-gutters>
                          <v-col cols="9" xl="9" lg="9" sm="9" md="9	">
                            <v-card
                              class="elevation-0 rounded-lg pb-0 pt-1 pl-1 text-left; justify-left"
                              heigh="auto"
                              :color="item.firstCardColor"
                            >
                              <v-card-text
                                class="text-wrap ma-0 pa-1 font-weight-bold text-h4 pb-0 mb-0"
                              >
                                {{ item.title }}
                              </v-card-text>

                              <v-card-text class="text-no-wrap ma-0 pa-0 ml-2">
                                <span
                                  style="
                                    margin-right: 5px;

                                    text-align: left;
                                  "
                                  class="mt-0 text-left text-h5 font-weight-bold text-nowrap"
                                >
                                  {{ item.value }}
                                </span>
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col
                            cols="3"
                            xl="3"
                            lg="3"
                            sm="3"
                            md="3"
                            class="mt-0 text-center"
                          >
                            <v-card
                              class="elevation-0 rounded-lg my-2 mr-0 mt-4 pa-3 d-flex justify-center"
                              :color="item.innerColor"
                              height="auto"
                              width="65"
                            >
                              <v-card
                                class="elevation-0 rounded-lg text-center"
                                height="30"
                                width="30"
                                :color="item.innestColor"
                              >
                                <v-icon color="white" class="mt-1" size="23"
                                  >{{ item.icon }}
                                </v-icon>
                              </v-card>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-card>
                    </template>
                    <v-row
                      no-gutters
                      align="center"
                      justify="start"
                      class="ma-0 pa-0"
                    >
                      <v-col
                        cols="1"
                        lg="1"
                        xl="1"
                        sm="1"
                        md="1"
                        class="mx-0 mr-2"
                      >
                        <span>
                          <v-avatar
                            :color="item.firstCardColor"
                            size="28"
                            class="ml-0 pl-0"
                          >
                            <v-icon size="18">mdi-wallet-plus</v-icon></v-avatar
                          >
                        </span>
                      </v-col>
                      <v-col cols="10" lg="10" xl="10" sm="10" md="10">
                        <v-card class="elevation-0 rounded-xl">
                          <v-card-text
                            class="text-h6 py-0 pr-5 my-0 font-weight-bold ml-2 text-nowrap"
                          >
                            <div class="my-0 py-0">
                              <span class="text-h6"> Total Amount :</span>
                              <span
                                class="text-h6 text-danger font-weight-bold py-0 my-0"
                                v-if="item.value.toString().includes('-')"
                              >
                                {{ item.value }} </span
                              ><span
                                class="text-h6 font-weight-bold py-0"
                                v-else
                              >
                                {{ item.value }}
                              </span>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col col cols="12" md="12" lg="12" xl="12" sm="12">
            <v-card class="mx-1 mb-0 rounded-xl elevation-0 mt-0">
              <v-card-title class="pa-6 pb-0">
                <v-row no-gutters>
                  <v-col
                    cols="7"
                    sm="4"
                    md="4"
                    lg="4"
                    xl="5"
                    class="d-flex align-center"
                  >
                    <v-card-text class="font-weight-medium text-body-1"
                      >{{ mainApexAreaSelect }} Transaction Chart</v-card-text
                    >
                  </v-col>
                  <v-col
                    sm="5"
                    md="6"
                    lg="5"
                    xl="4"
                    class="d-none d-sm-flex align-center"
                  >
                    <v-icon size="18" color="warning">mdi-circle-medium</v-icon
                    ><span class="card-dark-grey mr-3 text-h6">Credits</span>
                    <v-icon size="18" color="primary">mdi-circle-medium</v-icon
                    ><span class="card-dark-grey mr-3 text-h6">Debits</span>
                    <v-icon size="18" color="#B1BCFF">mdi-circle-medium</v-icon
                    ><span class="card-dark-grey text-h6">All Transaction</span>
                  </v-col>
                  <v-col cols="5" sm="3" md="2" lg="2" xl="2" offset-lg="1">
                    <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-select
                          :menu-props="{
                            nudgeBottom: 6 + 'px',
                            zIndex: 0,
                            allowOverflow: true,
                            rounded: 'xl',
                          }"
                          class="main-chart-select"
                          rounded
                          v-model="mainApexAreaSelect"
                          v-bind="attrs"
                          v-on="on"
                          dense
                          flat
                          single-line
                          hide-details
                          :items="mock.select"
                          outlined
                        >
                          <template v-slot:prepend-inner>
                            <v-icon size="13" class="mt-0 mr-1">
                              mdi-circle
                            </v-icon>
                          </template>
                          <template v-slot:item="data">
                            <!-- <v-card class="rounded-xl elevation-0"></v-card> -->
                            <div backgroundColor="red">
                              <v-icon class="mr-4" size="13">
                                mdi-circle
                              </v-icon>
                              <span class="mx-3 rounded-xl text-body-1">
                                {{ data.item }}
                              </span>
                            </div>
                          </template>
                          <template v-slot:selection="data">
                            <v-card
                              class="rounded-xl mx-2 elevation-0 flex-nowrap font-weight-bold text--secondary text-body-1"
                              style="background-color: #eeeeee"
                            >
                              {{ data.item }}
                            </v-card>
                          </template>
                        </v-select>
                      </template>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-text class="pa-5">
                <v-row>
                  <v-col>
                    <ApexChart
                      v-if="apexLoading"
                      height="350"
                      type="area"
                      :options="mock.mainApexArea.options"
                      :series="
                        mainApexAreaSelect === 'Daily'
                          ? mock.mainApexArea.series
                          : mainApexAreaSelect === 'Weekly'
                          ? mock.mainApexArea.series2
                          : mock.mainApexArea.series3
                      "
                    ></ApexChart>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="12" sm="12" lg="12" xl="12">
            <v-card class="mx-1 mb-15 rounded-xl elevation-0 pt-2 px-0">
              <transaction
                :tableItem="tableData"
                ref="transactionTable"
                fromPage="Dashboard"
              ></transaction>
              <v-card-text class="text-center mb-10">
                <!-- <v-btn
									text
									class="
										text-h6
										font-weight-bold
										text-primary
										rounded-xl
										px-2
										text-capitalize
									"
									@click="seeAll"
								>
									See all Transaction</v-btn
								> -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card></v-col
    >
  </v-row>

  <!-- 		
		</div>
	</v-container> -->
</template>

<script>
/*eslint-disable*/
import mock from "@/mock";
import { myMixin } from "@/mixins/formatNumbers";
// import Trend from "vuetrend";
import ApexChart from "vue-apexcharts";
import EventBus from "@/helpers/eventBus";
import Transaction from "@/components/TransactionModule/transaction";

export default {
  mixins: [myMixin],
  name: "Dashboard",
  components: {
    ApexChart,
    Transaction,
  },
  data() {
    return {
      mock,
      apexLoading: false,
      value: this.getRandomInt(10, 90),
      value2: this.getRandomInt(10, 90),
      mainApexAreaSelect: "Daily",
      debitTotalAmount: "",
      creditTotalAmount: "",
      tableDat: [],
      dialog: false,
      wDialog: "",
      tableClickItem: {},

      obj: {},

      firstRow: [
        {
          title: "T. Customer Acct.",
          value: 0,
          firstCardColor: "#9FA8DA",
          innerColor: "#5C6BC0",
          innestColor: "#9FA8DA",
          icon: "mdi-account-group",
        },
        {
          title: "T. Expenses",
          value: 0,
          firstCardColor: "#E6EE9C",

          innerColor: "#D4E157",
          innestColor: "#E6EE9C",
          icon: "mdi-chart-bell-curve",
        },
        {
          title: "Acct. Recievable",
          value: 0,
          firstCardColor: "#80CBC4",
          innerColor: "#26A69A",
          innestColor: "#80CBC4",

          icon: "mdi-cash-plus",
        },

        {
          title: "T. Debts",
          value: 0,
          firstCardColor: "#A5D6A7",
          innerColor: "#66BB6A",
          innestColor: "#A5D6A7",
          icon: "mdi-stairs-down",
        },
      ],

      secondRow: [
        {
          title: "T. Transac. Worth.",
          value: 0,
          firstCardColor: "#c8e6e4",
          innerColor: "#80CBC4",
          innestColor: "#B2DFDB",
          icon: "mdi-cash-plus",
        },
        {
          title: "T. Credits",
          value: 0,
          firstCardColor: "#f0c5cb",

          innerColor: "#EF9A9A",
          innestColor: "#FFCDD2",
          icon: "mdi-hand-coin-outline",
        },
        {
          title: "T. Debits",
          value: 0,
          firstCardColor: "#d9cfe8",
          innerColor: "#B39DDB",
          innestColor: "#D1C4E9",
          icon: "mdi-graph",
        },

        {
          title: "T. Valuations",
          value: 0,
          firstCardColor: "#c0daed",
          innerColor: "#90CAF9",
          innestColor: "#BBDEFB",
          icon: "mdi-finance",
        },
      ],
    };
  },
  computed: {
    firstRowItems() {
      let credit = this.$store.getters.creditTotalAmountGetter;
      let debit = this.$store.getters.debitTotalAmountGetter;
      let customerWallet = this.$store.getters.customerWalletGetter;
      let expenses = this.$store.getters.allExpenseGetter;
      // ;

      return this.firstRow.map((item) => {
        if ((credit || credit == 0) && (debit || debit == 0)) {
          // Total customer Block
          if (item.title == "T. Customer Acct.") {
            if (customerWallet.length) {
              let totalAmount = 0;
              customerWallet.forEach((user) => {
                totalAmount = totalAmount + parseFloat(user.acct_bal);
              });
              item.totalNumberOfCustomerAccount = customerWallet.length;
              item.value = this.numbFormat(totalAmount || 0, "en-NG", "NGN");
            }

            return item;
          } else if (item.title == "T. Expenses") {
            if (expenses.length) {
              let totalAmount = 0;

              expenses.forEach((transaction) => {
                totalAmount =
                  totalAmount + parseFloat(transaction.expense_details.amount);
              });

              item.value = this.numbFormat(totalAmount || 0, "en-NG", "NGN");
            } else {
              item.value = this.numbFormat(0.0, "en-NG", "NGN");
            }

            return item;
          } else if (item.title == "Acct. Recievable") {
            item.value = debit
              ? this.numbFormat(0.0, "en-NG", "NGN")
              : this.numbFormat(0.0, "en-NG", "NGN");
            return item;
          } else if (item.title == "T. Debts") {
            let x = parseInt(credit) + parseInt(debit);

            item.value = x
              ? this.numbFormat(0.0, "en-NG", "NGN")
              : this.numbFormat(0.0, "en-NG", "NGN");
            return item;
          }
          return item;
        } else {
          item.value = this.numbFormat(0, "en-NG", "NGN");
          return item;
        }
      });
    },

    secondRowItems() {
      let credit = this.$store.getters.creditTotalAmountGetter;
      let debit = this.$store.getters.debitTotalAmountGetter;

      return this.secondRow.map((item) => {
        if ((credit || credit == 0) && (debit || debit == 0)) {
          if (item.title == "T. Valuations") {
            let x = credit - debit;
            item.value = this.numbFormat(x, "en-NG", "NGN");

            return item;
          } else if (item.title == "T. Credits") {
            item.value = credit
              ? this.numbFormat(credit, "en-NG", "NGN")
              : this.numbFormat(0, "en-NG", "NGN");

            return item;
          } else if (item.title == "T. Debits") {
            item.value = debit
              ? this.numbFormat(debit, "en-NG", "NGN")
              : this.numbFormat(0, "en-NG", "NGN");
            return item;
          } else if (item.title == "T. Transac. Worth.") {
            let x = parseInt(credit) + parseInt(debit);

            item.value = x
              ? this.numbFormat(x, "en-NG", "NGN")
              : this.numbFormat(0, "en-NG", "NGN");
            return item;
          }
          return item;
        } else {
          item.value = this.numbFormat(0, "en-NG", "NGN");
          return item;
        }
      });
    },
    tableData() {
      let x = this.$store.getters.getPureTransactionsGetter;
      return Object.keys(x).length ? [x] : [];
    },
  },
  methods: {
    fetchRecord(pageNumber) {
      let channelId = this.$store.getters.channelIdGetter;
      this.$store
        .dispatch("PURE_TRANSACTIONS", {
          channelId: channelId,
          pageNumber: pageNumber || 1,
        })
        .then(() => EventBus.$emit("dataIsLoading", false));
    },
    seeAll() {
      this.$router.push({
        name: "Transaction",
      });
    },
    theFormat(number) {
      return parseInt(number).toFixed(2);
    },

    getRandomInt(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
  },
  beforeMount() {
    EventBus.$on("fetchPureTransaction", this.fetchRecord);

    EventBus.$on("paginate", this.fetchRecord);

    let channelId = this.$store.getters.channelIdGetter;
    let ob = this.$store.getters.getPureTransactionsGetter;
    let expense = this.$store.getters.allExpenseGetter;
    let cuWallet = this.$store.getters.customerWalletGetter;
    let payload = {
      channelId: channelId,
      pageNumber: 1,
    };

    if (!Object.keys(ob).length) {
      this.$store.dispatch("PURE_TRANSACTIONS", payload).then((res) => {
        EventBus.$emit("dataIsLoading", false);
      });
    }

    if (!Object.keys(cuWallet).length) {
      this.$store.dispatch("CUSTOMER_WALLET", payload);
    }
    if (!Object.keys(expense).length) {
      this.$store.dispatch("ALL_EXPENSES", payload);
    }
  },

  mounted() {
    this.apexLoading = true;
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
