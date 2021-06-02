<template>
    <div class="container-login">
        <div class="login-box">
            <h3>Logar</h3>
            <div class="box">
                <div class="form-login">
                    <input required type="text" placeholder="Usuario" v-model="usuario">
                    <input required type="password" placeholder="Senha" v-model="senha">
                    <button @click="Entrar()">Entrar</button>
                </div>
            </div>
            <a class="box-cadastro" href="/cadastro-usuario">Efetuar cadastro</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: '',
            senha: ''
        }
    },
    methods: {
        Entrar() {
            if(this.usuario !== '' && this.senha !== '') {
                let usuario_logado = this.getUsuarios
                .filter(user => user.usuario === this.usuario && user.senha === this.senha)
                
                if(usuario_logado.length !== 0) {
                    console.log(usuario_logado)
                }
                             
            }
        }
    },
    computed: {
        getUsuarios() {
            return this.$store.getters.getUsuarios
        }
    },
    mounted() {
        this.$store.dispatch('getUsuarios')
        
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
.box input{    
    margin: auto;
    display: block;
}

.form-login input {
    width: 350px;
    height: 25px;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 16px;
}

.form-login button {
    width: 360px;
    height: 35px;
    background-color: rgb(174, 0, 255);
    border-radius: 4px;
    border: 1px solid rgb(85, 33, 100);
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 20px;
}

.box-cadastro {
    font-size: 14px;
    color: white;
    text-decoration: none;
}


</style>