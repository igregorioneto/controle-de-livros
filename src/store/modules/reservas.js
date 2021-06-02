import axios from "axios"

export default {
    state: {
        reservas: []
    },
    mutations: {
        getReservas(state, resp) {
            state.reservas = resp
        }
    },
    actions: {
        getReservas({commit}) {
            axios.get('http://localhost:3000/reservas').then(resp => {
                commit('getReservas', resp.data)
            })
        }
    },
    getters: {
        getReservas(state) {
            return state.reservas
        }
    }
}