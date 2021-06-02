import axios from "axios"

export default {
    state: {
        livro: '',
        livros: []
    },
    mutations: {
        setLivros(state, resp) {
            state.livro = resp
        },
        getLivros(state, resp) {
            state.livros = resp
        }
    },
    actions: {
        setLivros({ commit }, order) {
            axios.post('http://localhost:3000/livros',
            {
               nomeLivro: order.nomeLivro,
               usuarioId: order.usuarioId 
            }).then((response) => {
                commit('setLivros',response)
            }, (error) => {
                commit('setLivros',error)
            })
        },
        getLivros({ commit }) {
            axios.get('http://localhost:3000/livros')
            .then(response => {
                commit('getLivros', response.data)
            })
        }   
    },
    getters: {
        getLivros(state) {
            return state.livros
        }
    }
}