import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import { TeamMember, MemberRole } from '@/types';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: Array.from({ length: 5 }).map((_, id) => ({
      id,
      name: 'John Doe ' + id  ,
      email: 'john.doe@chargebee.com' + id
    })) as TeamMember[]
  },
  mutations: {
    addMember(state, member: any) {
      state.members.push(member);
    }
  },
  getters: {
    listMembers(state) {
      return state.members;
    }
  },
  actions: {

  },
  modules: {},
  plugins: [vuexPersist.plugin],
});
