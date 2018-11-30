<template>
  <b-row>
    <b-col cols="12">
      <b-jumbotron>
        <template slot="header">
        <h2 class="black  white--text">
        {{board.title}}
        </h2>
        </template>
        <template slot="lead">
          <div>
            <article v-for="(i, idx) in board" :key="idx" v-if="idx!='title'">
              <img :src="i">
            </article>
          </div>
        </template>
        <hr class="my-4">
      </b-jumbotron>
    </b-col>
  </b-row>
  
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowBoard',
  data () {
    return {
      key: '',
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {

      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  }
 
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
