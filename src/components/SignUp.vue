<Script>



</Script>

<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Sign Up</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <form @submit.prevent="userSignUp">
        <v-layout column>
          <v-flex>
            <v-alert error dismissible v-model="alert">
              {{ error }}
            </v-alert>
          </v-flex>
          <v-flex class="text-xs-center">
            <v-btn @click="signup()"> Sign in With Facebook</v-btn>
          </v-flex>
          <v-flex>
            <v-text-field
              name="email"
              label="Email"
              id="email"
              type="email"
              v-model="email"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="password"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              name="confirmPassword"
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              v-model="passwordConfirm"
              :rules="[comparePasswords]"
            ></v-text-field>
          </v-flex>
          <v-flex class="text-xs-center" mt-5>
            <v-btn primary type="submit" :disabled="loading">Sign Up</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>


<script>
  import router from '../router'
  import firebase2 from 'firebase'
  const firebaseConfig2 = {
    apiKey: "AIzaSyBUi-fUsMC3MmJ6gMC9qdSUjciNvZqDNmI",
    authDomain: "assignment2-61808.firebaseapp.com",
    databaseURL: "https://assignment2-61808.firebaseio.com",
    projectId: "assignment2-61808",
    storageBucket: "assignment2-61808.appspot.com",
    messagingSenderId: "1028764225899"
  
  }
  var provider = new firebase2.auth.FacebookAuthProvider();
  export default {
    data() {
      return {
        email: '',
        password: '',
        passwordConfirm: '',
        alert: false
      }
    },
    computed: {
      comparePasswords() {
        return this.password === this.passwordConfirm ? true : 'Password and confirm password don\'t match'
      },
      error() {
        return this.$store.getters.getError
      },
      loading() {
        return this.$store.getters.getLoading
      }
    },
    methods: {
      signup(){
        firebase2.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          router.push('/')
          // ...
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          // ...
        });
        
      },
      userSignUp() {
        if (this.comparePasswords !== true) {
          return
        }
        this.$store.dispatch('userSignUp', {email: this.email, password: this.password})
      }
    },
    watch: {
      error(value) {
        if (value) {
          this.alert = true
        }
      },
      alert(value) {
        if (!value) {
          this.$store.dispatch('setError', null)
        }
      }
    }
  }
</script>
