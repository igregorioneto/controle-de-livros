import Vue from 'vue'
import  Router from 'vue-router'

import Login from '../components/login/Login'
import CadastroUsuario from '../components/cadastro-usuario/CadastroUsuario'
import CadastroLivro from '../components/cadastro-livro/CadastroLivro'
import LivrosReservados from '../components/livros-reservados/LivrosReservados'
import CadastrarLivroReserva from '../components/cadastro-livro-reserva/CadastrarLivroReserva'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Login },
        { path: '/cadastro-usuario', component: CadastroUsuario },
        { path: '/cadastro-livro', component: CadastroLivro },
        { path: '/livros-reservados', component: LivrosReservados },
        { path: '/cadastrar-livro-reserva', component: CadastrarLivroReserva }
    ]
})