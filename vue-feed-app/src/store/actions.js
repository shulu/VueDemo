export default {
  INIT_ADDRLIST({ commit }) {
    let addrList = [
      "贪玩游戏B栋1F",
      "贪玩游戏B栋2F",
      "贪玩游戏B栋3F",
      "贪玩游戏B栋4F",
      "贪玩游戏B栋5F",
      "贪玩游戏B栋6F",
    ];
    commit("SET_ADDRLIST", addrList);
  },
  UPDATE_ADDRINDEX({ commit }, addrIndex) {
    commit("SET_CUR_ADDR", addrIndex);
  },
};
