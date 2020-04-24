import career from "../../api/career";

const state = {
	careerList: career.list,
	careerData: {}
};

const mutations = {
	SET_CAREER_DATA: (state, no) => {
		if (no) {
			for (const v of state.careerList) {
				if (v.no === no) {
					state.careerData = v;
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
