<template>
    <div class="container-login">
        <div class="login-box">
            <h3>Solicitar Reserva</h3>
            <div class="form-login">
                <select name="" id="" v-model="reservas">
                    <option :value="reserva.livroId" v-for="(reserva,index) in reservas" :key="index">
                        {{reserva.nomeLivro}}
                    </option>
                </select>
                <div class="form-button">
                    <button class="cadastrar" @click="Reservar()">Solicitar</button>
                    <button class="cancelar" @click="Cancelar()">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reservas: []
        }
    },
    methods: {
        Cancelar() {
            this.$router.push('livros-reservados')
        },
        Reservar() {
            console.log(this.reservas)
            let data = new Date()
            let data_devolucao = data.getDate()
            console.log(data_devolucao)
            let order = {
                livroId: this.reservas.livroId,
                usuarioId: this.reservas.usuarioId,
                devolucao: data_devolucao,
            }
            this.$store.dispatch('setReserva', order)

            this.Cancelar()
        }
    },
    computed: {
        getLivros() {
            return this.$store.getters.getLivros
        },
        getUsuarios() {
            return this.$store.getters.getUsuarios
        }
    },
    beforeMount() {
        this.$store.dispatch('getUsuarios')
        this.$store.dispatch('getLivros')
        
        this.getUsuarios.map(usuario => {
            this.getLivros.map(livro => {
                if(usuario.id !== livro.usuarioId) {
                    this.reservas.push(
                        {
                            nomeLivro: livro.nomeLivro,
                            livroId: livro.id,
                            usuarioId: usuario.id
                        }
                    )
                }
            })
        })
    }
}
</script>

<style scoped>
.login-box h3{
    font-size: 25px;
    color: white;
    font-weight: bold;
}
.form-login select{
    display: block;
    margin: auto;
    width: 350px;
    height: 40px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 16px;
}

.form-button button {
    width: 150px;
    height: 35px;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin: 0px 10px 20px 10px;
}

.form-button .cadastrar {
    background-color: rgb(52, 90, 9);
    border: 1px solid rgb(32, 77, 11);
}

.form-button .cancelar {
    background-color: rgb(161, 24, 24);
    border: 1px solid rgb(92, 11, 11);
}
</style>