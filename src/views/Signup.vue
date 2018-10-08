<template>
  <form v-on:submit.prevent="onSubmit" ref="form">
    <h2 class="text-center">Signup</h2>
    <fieldset class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" class="form-control" placeholder="Name"
              v-model="name"
              v-validate="'required'"
              required />
      <small v-show="errors.has('name')" class="help text-danger">
        {{ errors.first('name') }}
      </small>
    </fieldset>
    <fieldset class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" class="form-control" placeholder="Enter email"
              v-model="email"
              v-validate="'required|email'"
              required />
      <small v-show="errors.has('email')" class="help text-danger">
        {{ errors.first('email') }}
      </small>
    </fieldset>
    <fieldset class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" class="form-control" placeholder="Password"
              v-model="password"
              v-validate="'required|min:8|regex:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'"
              required />
      <small>Minimum 8 characters and <code>/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/</code></small><br/>
      <small v-show="errors.has('password')" class="help text-danger">
        {{ errors.first('password') }}
      </small>
    </fieldset>
    <fieldset class="form-group">
      <b-alert :show="message !== null" dismissible @dismissed="message=null" variant="warning">
        {{ message }}
      </b-alert>
      <button type="submit" class="btn btn-primary btn-block">Submit</button>
      <router-link class="btn btn-secondary btn-block" :to="{ name: 'login' }">Login</router-link>
    </fieldset>
  </form>
</template>

<script>
import API from '@/services/api'
import store from '@/store'
import router from '@/router'

export default {
  name: 'SignupView',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      message: null
    }
  },
  methods: {
    onSubmit: async function () {
      const { name, email, password } = this
      this.message = null

      try {
        const params = { name, email, password }
        const response = await API.signup(params)
        const { jwt } = response

        API.setAccessToken(jwt)
        store.dispatch('setToken', jwt)
        router.push({ name: 'home' })
      } catch (error) {
        this.message = this.$errorHandler(error)
      }
    }
  }
}
</script>

<style lang="scss">
</style>
