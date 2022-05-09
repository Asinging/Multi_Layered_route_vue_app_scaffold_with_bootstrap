/*eslint-disable*/
import { userObject, allUsers } from "@/api/user";
const userStore = {
  // namespace: true,
  state: {
    user: {},
    allUsers: false,
  },
  mutations: {
    mSingleUserAccount() {},
    mAllUsers(state, payload) {
      state.allUsers = payload;
    },
  },
  actions: {
    SINGLE_USER_ACCOUNT({ commit }, id) {
      userObject(id)
        .then((resp) => {
          commit("mSingleUserAccount", resp.data.data);
        })
        .catch((err) => console.error(err));
    },
    ALL_USERS({ commit }, payload) {
      allUsers(payload)
        .then((resp) => {
          commit("mAllUsers", resp.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  getters: {
    allUsersGetter(state) {
      if (state.allUsers) {
        return state.allUsers;
      }
      return [];
    },
  },
};
export default userStore;
