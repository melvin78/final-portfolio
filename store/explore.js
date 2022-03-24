
export const state = () => ({

  explore: false
})

export const mutations = {

  SET_EXPLORE: (state, payload) => (state.explore = payload)

}

export const getters = {

  getExplore: (state) => state.explore
}

export const  actions ={

async SetExplore({commit},payload){
  commit('SET_EXPLORE',payload)
}

}
