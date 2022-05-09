/*eslint-disable*/
import _ from "lodash";
export const projects = {
  methods: {
    userSearchProjectName: function (payload) {
      if (!_.isEmpty(payload)) {
        this.$store.dispatch("SEARCH_PROJECT_NAME", payload);
      }
      return;
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
