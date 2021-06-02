<template>
    <div class="container-login">
        <div class="login-box">
            <h3>Cadastrar novo usuário</h3>
            <div class="form-login">
                <input type="text" placeholder="Usuario" v-model="usuario">
                <input type="text" placeholder="Email" v-model="email">
                <input type="password" placeholder="Senha" v-model="senha">
                <div class="form-button">
                    <button class="cadastrar" @click="setUsuario()">Cadastrar</button>
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
            usuario: '',
            email: '',
            senha: ''
        }
    },
    methods: {
        Cancelar() {
            this.$router.push('/')
        },
        setUsuario() {
            const order = {
                usuario: this.usuario,
                email: this.email,
                senha: this.senha
            }
            this.$store.dispatch('setUsuario',order)

            this.limparCampos()            
        },
        limparCampos() {
            this.usuario = ''
            this.email = ''
            this.senha = ''
        }
    }
}
</script>

<style scoped>
.login-box {
    border: 1px solid rgb(184, 182, 182);
    border-radius: 3px;
    width: 500px;
    height: 280px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    margin: auto;
    background-color: rgb(84, 32, 133);
}
.login-box h3 {
    font-size: 25px;
    color: white;
    font-weight: bold;
}
.form-login input {
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