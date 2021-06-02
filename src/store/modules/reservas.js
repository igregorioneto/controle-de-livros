import axios from "axios"

export default {
    state: {
        reservas: [],
    },
    mutations: {
        getReservas(state, resp) {
            state.reservas = resp
        },
        setReserva(state, resp) {
            state.reservas = resp
        }
    },
    actions: {
        getReservas({commit}) {
            axios.get('http://localhost:3000/reservas').then(resp => {
                commit('getReservas', resp.data)
            })
        },
        setReserva({commit}, order) {
            axios.post('http://localhost:3000/reservas', 
            {
              devolucao: order.devolucao,
              usuarioId: order.usuarioId,
              livroId: order.id   
            })
            .then(response => {
                commit('setReserva', response)
            })
        }
    },
    getters: {
        getReservas(state) {
            return state.reservas
        }
    }
}