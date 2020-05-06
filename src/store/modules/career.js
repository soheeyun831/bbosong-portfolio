import career from "../../api/career";
import portfolio from "../../api/portfolio";

const state = {
  portfolio: portfolio.list,
  careerList: career.list,
  careerData: {}
};

const mutations = {
  SET_CAREER_DATA: (state, no) => {
    if (no) {
      for (const v of state.careerList) {
        if (v.no === no) {
          state.careerData = v;
					state.careerData.portfolio = state.portfolio.reduce((pre, obj) => {
						if (obj.career_no === no) {
							pre.push(obj);
						}
						return pre;
					}, []);
          break;
        }
      }
    }
  }
};

const actions = {
  setCareerData({commit}, no) {
    commit("SET_CAREER_DATA", no);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
