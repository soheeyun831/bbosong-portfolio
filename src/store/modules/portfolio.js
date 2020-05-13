import portfolio from "../../api/portfolio";

const state = {
  portfolio: portfolio.list,
  portfolioList: [],
  portfolioData: {}
};

const mutations = {
  SET_PORTFOLIO_DATA: (state, no) => {
    if (no) {
      for (const v of state.portfolio) {
        if (v.no === no) {
          state.portfolioData = v;
          break;
        }
      }
    }
  },
  SET_PORTFOLIO_LIST: (state, v) => {
    if (v === "All") {
      state.portfolioList = state.portfolio;
    } else {
      state.portfolioList = state.portfolio.reduce((pre, obj) => {
        obj.type.forEach(t => {
          if (t.type_nm === v) {
            pre.push(obj);
          }
        });
        return pre;
      }, []);
    }
  }
};

const actions = {
  setPortfolioData({ commit }, no) {
    commit("SET_PORTFOLIO_DATA", no);
  },
  setPortfolioList({ commit }, v) {
    commit("SET_PORTFOLIO_LIST", v);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
