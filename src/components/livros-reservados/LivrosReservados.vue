<template>
    <div class="container-lista">
        <h3>Listagem das reservas</h3>
        <div class="lista-button">
            <button @click="cadastrarLivro()" class="cadastrar">Cadastrar Livro</button>
            <button @click="reservarLivro()" class="reservar">Reservar Livro</button>
        </div>
        <div class="tabela-reservas">
            <table>
                <thead>
                    <th>Nome do livro</th>
                    <th>Usuario</th>
                    <th>Data de devolução</th>
                </thead>
                <tbody v-for="(lista,index) in listaReserva" :key="index">
                    <td>{{lista.nomeLivro}}</td>
                    <td>{{lista.usuario}}</td>
                    <td>{{lista.reserva}}</td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reservas: [],
            livros: [],
            usuarios: [],
            listaReserva: []
        }
    },
    computed: {
        getReservas() {
            return this.$store.getters.getReservas
        },
        getLivros() {
            return this.$store.getters.getLivros
        },
        getUsuarios() {
            return this.$store.getters.getUsuarios
        }
    },
    methods: {
        cadastrarLivro() {
            this.$router.push('/cadastro-livro')
        },
        reservarLivro() {
            this.$router.push('/cadastrar-livro-reserva')
        }
    },
    mounted() {
        this.$store.dispatch('getLivros')
        this.$store.dispatch('getReservas')
        this.$store.dispatch('getUsuarios')

        this.getUsuarios.map(usuario => {
            this.getLivros.map(livro => {
                this.getReservas.map(reserva => {
                    if(usuario.id == reserva.usuarioId && livro.id == reserva.livroId) {
                        this.listaReserva.push(
                        {
                            nomeLivro: livro.nomeLivro, 
                            usuario: usuario.usuario,
                            reserva: reserva.devolucao
                        })
                        console.log(this.listaReserva)
                    }
                })
            })
        })
    }
}
</script>

<style scoped>
.container-lista h3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
}

.tabela-reservas table{
    width: 50%;
    margin: auto;
    color: white;
}

.tabela-reservas th {
    border: 1px solid lightgray;
    padding: 5px;
}

.tabela-reservas td {
    padding: 5px;
    background-color: rgb(132, 103, 150);
}

.lista-button button{
    width: 150px;
    height: 35px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 10px 20px 10px;
}

.lista-button .cadastrar {
    background-color: rgb(52, 90, 9);
    border: 1px solid rgb(32, 77, 11);
}

.lista-button .reservar {
    background-color: rgb(24, 95, 161);
    border: 1px solid rgb(11, 33, 92);
}

</style>