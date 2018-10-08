<template>
  <section class="text-center">
    <p v-if="isLoading">Loading...</p>
    <section v-else>
      <h3>Welcome {{ name }}!</h3>
      <figure class="figure" v-if="avatarUrl">
        <img :src="avatarUrl" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
        <figcaption class="figure-caption">You look lovely today.</figcaption>
      </figure>
    </section>
  </section>
</template>

<script>
import API from '@/services/api'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  data () {
    return {
      isLoading: false,
      name: '',
      avatarUrl: ''
    }
  },
  created () {
    if (this.token) {
      this.fetchUser()
    }
  },
  methods: {
    fetchUser: async function () {
      try {
        this.isLoading = true
        const response = await API.getCurrentUser()
        this.name = response.name
        this.avatarUrl = response.avatar_url
      } catch (error) {
        console.warn(error) // TOOO add error handling
      } finally {
        this.isLoading = false
      }
    },
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  }
}
</script>
