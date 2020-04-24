import portfolio from "../../api/portfolio";

const state = {
	portfolioList: portfolio.list,
	portfolioData: {}
};

const mutations = {
	SET_PORTFOLIO_DATA: (state, no) => {
		if (no) {
			for (const v of state.portfolioList) {
				if (v.no === no) {
					state.portfolioData = v;
					break;
				}
			}
		}
	}
};

const actions = {
	setPortfolioData({commit}, no) {
		commit("SET_PORTFOLIO_DATA", no);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
