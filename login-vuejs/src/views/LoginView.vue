<template>
    <form @submit.prevent="Submit">
        <h1>Login</h1>
        <div class="form-group">
            <label for="user">Usuario</label>
            <input type="text" id="user" v-model="form.user" required>
            <br><br>
            <label for="pwd">Contraseña:</label>
            <input type="password" id="pwd" v-model="form.password" pattern=".{4,}" required>
            <br><br>
            <button type="submit">Login</button>
        </div>

        <div class="form-group">
        <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
   </form>
</template>

<script>
export default {
    data(){return{form:{
        user: "",
        password: "",
        errorMessage: ""
    }}},
    methods:{
        Submit() {
            this.$store.commit('login', this.form.user)
            this.$router.push('/welcome')
        }
    }
}
</script>