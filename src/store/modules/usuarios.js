import axios from "axios"

export default {
    state: {
        usuario: '',
        usuarios: []
    },
    mutations: {
        setUsuario(state, resp) {
            state.usuarios = resp
        },
        getUsuarios(state, resp) {
            state.usuarios = resp
        }
    },
    actions: {
        setUsuario({commit}, order) {
            if(order.usuario !== undefined || order.usuario === '') {
                axios.post('http://localhost:3000/usuario', {
                    usuario: order.usuario,
                    email: order.email,
                    senha: order.senha
                }).then(response => {
                    commit('setUsuario', response)
                })
            }
        },
        getUsuarios({commit}) {
            axios.get('http://localhost:3000/usuario').then(response => {
                commit('getUsuarios', response.data)
            })
        }
    },
    getters: {
        getUsuarios(state) {
            return state.usuarios
        }
    }
}