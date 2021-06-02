import Vue from 'vue'
import Vuex from 'vuex'

import reservas from './modules/reservas'
import usuarios from './modules/usuarios'
import livros from './modules/livros'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        reservas,
        usuarios,
        livros
    }
})