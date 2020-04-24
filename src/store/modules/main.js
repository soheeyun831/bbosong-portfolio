import faq from "../../api/faq";
import info from "../../api/info";
import career from "../../api/career";
import portfolio from "../../api/portfolio";

const state = {
  main: {
    introduction: info.introduction,
    skill: info.skills,
    career: career.list,
    portfolio: portfolio.list,
    faq: faq.list
  }
};
export default {
  namespaced: true,
  state
};
