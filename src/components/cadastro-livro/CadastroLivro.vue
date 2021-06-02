<template>
    <div class="container-login">
        <div class="login-box">
            <h3>Cadastrar livro</h3>
            <div class="form-login">
                <input type="text" placeholder="Nome do livro / Revista" v-model="livro">
                <div class="form-button">
                    <button class="cadastrar" @click="cadastrarLivro()">Cadastrar</button>
                    <button class="cancelar" @click="Cancelar()">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            livro: ''
        }
    },
    methods: {
        Cancelar() {
            this.$router.push('livros-reservados')
        },
        cadastrarLivro() {
            let user = JSON.parse(localStorage.getItem('usuario_logado'))
            let order = {
                nomeLivro: this.livro,
                usuarioId: user.id
            }
            this.$store.dispatch('setLivros', order)

            this.limparCampo()
        },
        limparCampo() {
            this.livro = ''
            this.$router.push('/livros-reservados')
        }
    }
}
</script>

<style scoped>
.login-box h3{
    font-size: 25px;
    color: white;
    font-weight: bold;
}
.form-login input{
    display: block;
    margin: auto;
    width: 350px;
    height: 25px;
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