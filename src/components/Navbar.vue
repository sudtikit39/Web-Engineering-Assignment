<template>
  <v-toolbar class="black" >
  <ul><link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
  </ul>
  
    <v-toolbar-title class="headline text-uppercase" >
     <v-btn @click="goBoardList()" color="red" dark>MAIN PAGE
    </v-btn>
  </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <div class="text-xs-center">
          <div>
            <v-btn @click="goMembers()" color="red" dark>Members
              <v-icon dark right>exit_to_app  </v-icon>
            </v-btn>
            <v-btn color="red" dark
              flat
              v-for="(item, i) in toolbarItems"
              :key="item.i"
              :to="item.link">
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
            <v-btn @click="goLogOut()" color="red" dark>LogOut
              <v-icon dark right>exit_to_app  </v-icon>
            </v-btn>
          </div>


        </div>

    </v-toolbar-items>

  </v-toolbar>


</template>

<script>
  import router from '../router'
  import firebase from 'firebase' 
  export default {
    data() {
      return {
        email: '',
        password: '',
        alert: false
      }
    },

    computed: {
      isAuthenticated() {
        const user = firebase.auth().currentUser
        return (
          user
        );
      },
      toolbarItems() {
        return this.isAuthenticated ? [] : [
          {
            icon: "face",
            title: "Sign Up",
            link: "/signup"
          }, {
            icon: "lock_open",
            title: "Sign In",
            link: "/signin"
          }
        ];
      }
    },

    methods: {
      goBoardList() {
          router.push('/BoardList')
      },
      goSignUp() {
        router.push('/signup')
      },
      goSignIn() {
        router.push('/signin')
      },
      goLogOut() {
        firebase.auth().signOut();
        router.push('/signin')
      },
      goMembers() {
        router.push('/Members')
      }
    }
  }
</script>
