import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    error: null
  },
  mutations: {
    setUsuario(state, payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    crearUsuario({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          console.log(res)
          const usuarioCreado = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuarioCreado)
        })
        .catch(error => {
          console.log(error)
          commit('setError', error)
        })
    }
  },
  modules: {
  }
})