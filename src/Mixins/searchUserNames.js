/*eslint-disable*/
import _ from "lodash";
export const WalletAccount = {
  methods: {
    userSearchAccountName: function (payload) {
      if (!_.isEmpty(payload)) {
        this.$store.dispatch("SEARCH_ACCOUNT_NAME", payload);
      }
      return;
    },
    userSearchProjectName: function (payload) {
      if (!_.isEmpty(payload)) {
        this.$store.dispatch("SEARCH_PROJECT_NAME", payload);
      }
      return;
    },
    customAccountNameFilter(arr, search) {
      if (search) {
        search = search.toLowerCase().trim();

        return (
          arr.details.firstname.toLowerCase().trim().includes(search) ||
          arr.details.lastname.toLowerCase().trim().includes(search)
        );
      }
      r;
    },
    customWalletNameFilter(arr, search) {
      // debugger

      if (search) {
        search = search.toLowerCase().trim();

        return arr.wallet_name.toLowerCase().trim().includes(search);
      }
      r;
    },
    customProjectFilter(arr, search) {
      // debugger
      if (search) {
        search = search.toLowerCase().trim();
        return arr.job_title
          ? arr.job_title.toLowerCase().trim().includes(search)
          : "";
      }
      r;
    },
  },
};
