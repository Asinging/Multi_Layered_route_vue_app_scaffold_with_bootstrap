<template>
  <v-app class="pa-1 mx-0 px-0">
    <Header class="mb-0" />
    <Sidebar :sideBaritems="sideBarLinks"></Sidebar>
    <v-main class="content page mt-0">
      <token-mechant></token-mechant>
      <set-snackbar :snackbar="snackbar" :text="text" :timeout="timeout">
      </set-snackbar>
      <v-row>
        <v-col
          cols="12"
          lg="12"
          xl="12"
          md="12"
          sm="12"
          class="mx-0 px-lg-0 px-xl-0 px-md-0 px-sm-0 px-0"
        >
          <!-- <transition name="slideChat" mode="out-in">
						<v-card
							v-if="chatClick"
							height="auto"
							width="560"
							class="elevation-10 rounded-xl real_chat"
						>
							<chat-window
								style="position: sticky"
								class="rounded-xl"
								:height="500"
								:current-user-id="currentUserId"
								:rooms="rooms"
								:messages="messages"
								:show-footer="true"
								:menu-actions="menu_actions"
							/>
						</v-card>
					</transition> -->
          <v-card
            class="elevation-0 rounded-xl mx-0 px-0"
            color="#F6F7FF"
            v-if="$route.path === '/'"
          >
            <v-card-text
              class="mx-0 font-weight-bold text-h5 text--disabled ml-0"
            >
              <!-- text-lg-h4
								text-xl-h4
								text-lg-h4
								text-md-h4 -->
              <span class="mr-2 mb-1 px-0">
                <v-icon color="" size="30" class="mb-2 text--secondary px-0"
                  >mdi-home</v-icon
                ></span
              >
              <span class="mx-0 mt-0 font-weight-bold text--secondary"
                >Dashboard</span
              >
            </v-card-text>
          </v-card>
          <!-- <dashboard-header></dashboard-header> -->
          <transition name="fade" mode="out-in">
            <router-view> </router-view>
          </transition>
        </v-col>
      </v-row>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
/*eslint-disable*/
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
import ChatWindow from "vue-advanced-chat";
import "vue-advanced-chat/dist/vue-advanced-chat.css";
import "./Layout.scss";
import { myMixin } from "@/mixins/formatNumbers";
import { mapState } from "vuex";

export default {
  name: "Layout",
  mixins: [myMixin],
  components: {
    Footer,
    Header,
    ChatWindow,
    Sidebar,
    Chat: () => import("@/components/utils/list/list.vue"),
    TokenMechant: () => import("@/components/AlertModule/tokenMechant"),
    DashboardHeader: () => import("@/components/DashboardHeader/inpageHeader"),
  },
  data() {
    return {
      snackbar: false,
      timeout: 5000,
      text: "",

      // rooms: [
      // 	{
      // 		roomId: 1,
      // 		roomName: "Room 1",
      // 		avatar: "assets/imgs/people.png",
      // 		unreadCount: 10,
      // 		index: 3,
      // 		lastMessage: {
      // 			content: "Last message received",
      // 			senderId: 1111,
      // 			username: "John Doe",
      // 			timestamp: "10:20",
      // 			saved: true,
      // 			distributed: false,
      // 			seen: false,
      // 			new: true,
      // 		},
      // 		users: [
      // 			{
      // 				_id: 1111,
      // 				username: "John Doe",
      // 				avatar: "assets/imgs/doe.png",
      // 				status: {
      // 					state: "online",
      // 					lastChanged: "today, 14:30",
      // 				},
      // 			},
      // 			{
      // 				_id: 2222,
      // 				username: "John Snow",
      // 				avatar: "assets/imgs/snow.png",
      // 				status: {
      // 					state: "offline",
      // 					lastChanged: "14 July, 20:00",
      // 				},
      // 			},
      // 		],
      // 		typingUsers: [2222],
      // 	},
      // 	{
      // 		roomId: 2,
      // 		roomName: "Room 2",
      // 		avatar: "assets/imgs/people.png",
      // 		unreadCount: 3,
      // 		index: 5,
      // 		lastMessage: {
      // 			content: "Last message received",
      // 			senderId: 3333,
      // 			username: "John D",
      // 			timestamp: "10:00",
      // 			saved: true,
      // 			distributed: false,
      // 			seen: false,
      // 			new: true,
      // 		},
      // 		users: [
      // 			{
      // 				_id: 3333,
      // 				username: "John Doe",
      // 				avatar: "assets/imgs/doe.png",
      // 				status: {
      // 					state: "online",
      // 					lastChanged: "today, 14:30",
      // 				},
      // 			},
      // 			{
      // 				_id: 4444,
      // 				username: "John Snow",
      // 				avatar: "assets/imgs/snow.png",
      // 				status: {
      // 					state: "offline",
      // 					lastChanged: "14 July, 20:00",
      // 				},
      // 			},
      // 		],
      // 		typingUsers: [4444],
      // 	},
      // 	{
      // 		roomId: 3,
      // 		roomName: "Room 3",
      // 		avatar: "assets/imgs/people.png",
      // 		unreadCount: 2,
      // 		index: 10,
      // 		lastMessage: {
      // 			content: "Last message received",
      // 			senderId: 5555,
      // 			username: "J Doe",
      // 			timestamp: "10:20",
      // 			saved: true,
      // 			distributed: false,
      // 			seen: false,
      // 			new: true,
      // 		},
      // 		users: [
      // 			{
      // 				_id: 5555,
      // 				username: "John De",
      // 				avatar: "assets/imgs/doe.png",
      // 				status: {
      // 					state: "online",
      // 					lastChanged: "today, 14:30",
      // 				},
      // 			},
      // 			{
      // 				_id: 6666,
      // 				username: "John Snow",
      // 				avatar: "assets/imgs/snow.png",
      // 				status: {
      // 					state: "online",
      // 					lastChanged: "14 July, 20:00",
      // 				},
      // 			},
      // 		],
      // 		typingUsers: [6666],
      // 	},
      // ],
      // messages: [
      // 	{
      // 		_id: 7890,
      // 		indexId: 12092,
      // 		content: "Message 1",
      // 		senderId: 1234,
      // 		username: "John Doe",
      // 		avatar: "assets/imgs/doe.png",
      // 		date: "13 November",
      // 		timestamp: "10:20",
      // 		system: false,
      // 		saved: true,
      // 		distributed: true,
      // 		seen: true,
      // 		deleted: false,
      // 		disableActions: false,
      // 		disableReactions: false,
      // 		files: [
      // 			{
      // 				name: "My File",
      // 				size: 67351,
      // 				type: "png",
      // 				audio: true,
      // 				duration: 14.4,
      // 				url: "https://firebasestorage.googleapis.com/...",
      // 				preview: "data:image/png;base64,iVBORw0KGgoAA...",
      // 			},
      // 		],

      // 		replyMessage: {
      // 			content: "Reply Message",
      // 			senderId: 4321,
      // 			files: [
      // 				{
      // 					name: "My Replied File",
      // 					size: 67351,
      // 					type: "png",
      // 					audio: true,
      // 					duration: 14.4,
      // 					url: "https://firebasestorage.googleapis.com/...",
      // 					preview: "data:image/png;base64,iVBORw0KGgoAA...",
      // 				},
      // 			],
      // 		},
      // 	},
      // ],
      // currentUserId: 1111,
      // companyName: "",
      // messages: {
      // 	MESSAGE_ID_1: {
      // 		content: "My first message to <usertag>John</usertag>",
      // 		senderId: 2,
      // 		timestamp: "December 11, 2019 at 4:00:00 PM",
      // 		seen: true,
      // 	},
      // },
      // menu_actions: [
      // 	{
      // 		name: "inviteUser",
      // 		title: "Invite User",
      // 	},
      // 	{
      // 		name: "removeUser",
      // 		title: "Remove User",
      // 	},
      // 	{
      // 		name: "deleteRoom",
      // 		title: "Delete Room",
      // 	},
      // ],
      items: [
        {
          title: "Home",
          icon: "mdi-home",
          link: "/",
          iconColor: "blue",
          tooltipMessage: "Go to Dashboard",
        },
        {
          title: "Expenses",
          icon: "mdi-camera-metering-matrix",
          link: "/expense/postExpense",
          iconColor: "teal",
          tooltipMessage: "Manage Expenses",
        },

        {
          title: "Credit",
          icon: "mdi-wallet-plus",
          link: "/customer/credit/transaction",
          iconColor: "green",
          tooltipMessage: "All Credit Transactions",
          children: [
            {
              title: "All Credits  ",
              icon: "mdi-circle",
              link: "/all/credit/transaction",
              iconColor: "cyan",
              tooltipMessage: "All Credit Transaction",
            },
            {
              title: "Customer Acct. Transaction",
              icon: "mdi-circle",

              // link: "/customer/credit/transaction",
              link: "/customer/credit/transaction",
              iconColor: "orange",
              tooltipMessage: "Customer Account Credit Transaction",
            },
            {
              title: "Operation Acct. Transaction",
              icon: "mdi-circle",
              link: "/operation/credit/transaction",
              iconColor: "purple",
              tooltipMessage: "Operation ACcount Credit Transaction",
            },
          ],
        },
        {
          title: "Debit",
          icon: "mdi-wallet",
          link: "/customer/debit/transaction",
          iconColor: "blue",
          tooltipMessage: "All Debit Transactions",
          children: [
            {
              title: "All Debits",
              icon: "mdi-circle",
              link: "/all/debit/transaction",
              iconColor: "purple",
              tooltipMessage: "All Debit Transaction",
            },
            {
              title: "Customer Acct. Transaction",
              icon: "mdi-circle",
              link: "/customer/debit/transaction",
              iconColor: "orange",
              tooltipMessage: "Customer Account Debit Transaction",
            },
            {
              title: "Operation Acct. Transaction",
              icon: "mdi-circle",
              link: "/operation/debit/transaction",
              iconColor: "purple",
              tooltipMessage: "Operation Account Debit Transaction",
            },
          ],
        },
        {
          title: "Branches",
          icon: "mdi-git",
          link: "/manage/branches",
          iconColor: "black",
          tooltipMessage: "Company's Branch Overview",
          children: [
            {
              title: "Branch Overview",
              icon: "mdi-circle",
              link: "/manage/branches",
              iconColor: "#aabbcc",
              tooltipMessage: "Manage Company Branches",
            },
            // {
            // 	title: " Branch Transaction history",
            // 	icon: "mdi-account",
            // 	link: "/",
            // 	iconColor: "yellow",
            // 	tooltipMessage: "Branch Transaction",
            // },
            // {
            // 	title: "Account Overview",
            // 	icon: "mdi-circle",
            // 	link: "/",
            // 	iconColor: "cyan",
            // 	tooltipMessage: "Available Accounts/Wallets",
            // },
            // {
            // 	title: " Branch Account Balances",
            // 	icon: "mdi-circle",
            // 	link: "/branch/balances",
            // 	iconColor: "indigo",
            // 	tooltipMessage: "Available Accounts/Wallets",
            // },
          ],
        },
        {
          title: "Manage Accounts",
          icon: "mdi-cog",
          link: "/manage/customers/accounts",
          iconColor: "indigo",
          tooltipMessage: "Manage All Accounts",

          children: [
            {
              title: "Customers Account",
              icon: "mdi-circle",

              link: "/manage/customers/accounts",
              iconColor: "cyan",
              tooltipMessage: "Manage Customers's Account",
            },
            {
              title: "Operations Account",
              icon: "mdi-circle",
              link: "/manage/operations/accounts",
              iconColor: "yellow",
              tooltipMessage: "Manage Operations Account",
            },
          ],
        },
        {
          title: "Credit Limits",
          icon: "mdi-grid-large",
          link: "/manage/credit/limits",
          iconColor: "gold",
          tooltipMessage: "Manage Account Credit Limits",
          children: [
            {
              title: "All Credit Limits",
              icon: "mdi-circle",
              link: "/manage/credit/limits",
              iconColor: "cyan",
              tooltipMessage: "All Credit Limits ",
            },
            {
              title: "Add Credit Limits",
              icon: "mdi-circle",
              link: "/add/credit/limits",
              iconColor: "red",
              tooltipMessage: "Add Credit Limit",
            },
          ],
        },
        {
          title: "Transaction",
          icon: "mdi-chart-areaspline",
          link: "/trasaction/summary",
          iconColor: "yellow",
          tooltipMessage: "Transaction",
          children: [
            {
              title: "All Transactions ",
              icon: "mdi-circle",
              link: "/trasaction/summary",
              iconColor: "cyan",
              tooltipMessage: "All Transactions",
            },
            {
              title: "Reverse Transactions ",
              icon: "mdi-circle",
              link: "/all/reverse/transaction",
              iconColor: "red",
              tooltipMessage: "Reverse Transaction",
            },
            {
              title: "Credit-Reversed Transaction",
              icon: "mdi-circle",
              link: "/all/reverse/credit/transaction",
              iconColor: "green",
              tooltipMessage: "Credit-Reversed Transaction",
            },
            {
              title: "Debit-Reversed Transaction ",
              icon: "mdi-circle",
              link: "/all/reverse/debit/transaction",
              iconColor: "purple",
              tooltipMessage: "Reversed-Debit Transaction",
            },
          ],
        },
        {
          title: "Daily Balances",
          icon: "mdi-cash-multiple",
          link: "/account/daily/balance",
          iconColor: "indigo",
          tooltipMessage: "All Account Daily balances",
        },
        {
          title: "Invoice",
          icon: "mdi-receipt",
          link: "/invoice/index/1",
          iconColor: "red",
          children: [
            {
              title: "Project Invoice",
              icon: "mdi-circle",
              link: "/invoice/index/1",
              iconColor: "green",
              tooltipMessage: "Project Overview",
            },
            {
              title: "Sales Invoice",
              icon: "mdi-circle",
              link: "/invoice/type/sales/index/2",
              iconColor: "indigo",
              tooltipMessage: "Sales Invoice",
            },
          ],
        },

        {
          title: "Report",
          icon: "mdi-chart-bell-curve",
          link: "/reports/general/0/false",
          iconColor: "purple",

          children: [
            {
              title: "Account Balances",
              icon: "mdi-circle",
              link: "/reports/general/0/false",
              iconColor: "green",
              tooltipMessage: "Account Balance",
            },
            // {
            // 	title: "Credit Transactions",
            // 	icon: "mdi-circle",
            // 	link: "/report/generalreport",
            // 	iconColor: "cyan",
            // 	tooltipMessage: "Credit Transaction",
            // },
            // {
            // 	title: "Debit Transactions",
            // 	icon: "mdi-circle",
            // 	link: "/report/generalreport",
            // 	iconColor: "mdi-red",
            // 	tooltipMessage: "Debit Transaction",
            // },
          ],
        },
      ],
    };
  },
  watch: {
    auth(val) {
      if (val) {
        // this.snackbar = true;
        ("Access Granted. Login operation successful.");
      }
    },
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticatedGetter;
    },
    totalBranches() {
      let x = this.$store.getters.companyBranchGetter;

      if (x.length) {
        return x.length;
      }
      return 0;
    },
    chatClick() {
      let x = this.$store.getters.chatClickGetter;

      return x;
    },
    user() {
      let x = this.$store.getters.userObjectGetter;

      return x;
    },
    sidebarItem() {
      var x = this.$store.getters.sidebarItemClickGetter;
      if (x == undefined || !x) {
        x = localStorage.getItem("SIDEBAR_ITEM_CLICK");
      }
      return x;
    },

    sideBarLinks() {
      return this.items;
    },
    creditTotal() {
      let x = this.$store.getters.creditTotalAmountGetter;

      if (x) return this.numbFormat(x, "en-NG", "NGN");
      else return this.numbFormat(0, "en-NG", "NGN");
    },
    debitTotal() {
      let x = this.$store.getters.debitTotalAmountGetter;
      if (x) return this.numbFormat(x, "en-NG", "NGN");
      else return this.numbFormat(0, "en-NG", "NGN");
    },
    revenue() {
      let x = this.$store.getters.debitTotalAmountGetter;
      let y = this.$store.getters.creditTotalAmountGetter;
      let z = y - x;
      2;
      if (z) return this.numbFormat(z, "en-NG", "NGN");
      else return this.numbFormat(0, "en-NG", "NGN");
    },
  },
  methods: {
    theFormat(number) {
      return parseInt(number).toFixed(0);
    },
  },
  created() {
    let channelId = this.$store.getters.channelIdGetter;

    this.$store.dispatch("CREDIT_TOTAL_AMOUNT", channelId);

    this.$store.dispatch("DEBIT_TOTAL_AMOUNT", channelId);
  },
  beforeMount() {
    // this.$store.dispatch("TRANSACTIONS_CHANNEL", channelId);
  },
  mounted() {},
  destroyed() {},
};
</script>

<style src="./Layout.scss" lang="scss"></style>
