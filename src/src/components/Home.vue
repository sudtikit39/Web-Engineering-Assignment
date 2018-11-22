<!-- /components/Home.vue -->
<template>
  <div>
    <h1  align = 'center'>HomePage</h1>
    <h2 align = 'center' >Welcome</h2>
    <br>
    <br>
    <br>
    <h3 align = 'center'> เว็บไซต์นี้ จัดทำขึ้น เพื่อส่งอาจารย์ ในรายวิชา 242-420 WebEngineer โดยมีสมาชิคผู้ร่วมจัดทำดังนี้</h3>
    <br><div>
    <div class="col-sm-6 col-md-4" v-for="item in list">
      <div class="thumbnail">
        <img :src="item.url" :alt="item.title">
        <div class="caption">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>
</div>
 <form class="form-horizontal" v-on:submit.prevent="onSubmit">
    <fieldset>
      <!-- Form Name -->
      <legend>Photos</legend>
      <br>

      <!-- Text input-->
     
      <div class="form-group">
        <label class="col-md-4 control-label" for="title">Title:  </label>
        <input id="title" name="title" type="text" placeholder="title" class="form-control input-md" required="" v-model="title">
      </div>
      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="thumbnailUrl">Thumbnail URL:  </label>
        
        <input id="thumbnailUrl" name="thumbnailUrl" type="text" placeholder="thumbnail url" class="form-control input-md" required="" v-model="thumbnailUrl">
      </div>

      <!-- Text input-->
      <div class="form-group">
        <label class="col-md-4 control-label" for="url">URL:  </label>
       
        <input id="url" name="url" type="text" placeholder="url" class="form-control input-md" v-model="url">
      </div>
  <br/>
      <!-- Button (Double) -->
      

    </fieldset>
  </form>
<div class="form-group">
        <label class="col-md-4 control-label" for="save"></label>
        <div class="col-md-8">
          <button  id="save" name="save" class="btn btn-success" @click="onSubmit">Save</button>

        </div>
      </div>

    
    <br />
    <br />
  </div>
  
</template>

<script>
const API_URL = 'http://localhost:5000/photos'
export default {
  name: 'Home',
  data: function () {
    return {
      list: []
      
    }
  },
  
  created: function () {
    this.loadDate()
  },
  data () {
    return {
      id: null,
      title: null,
      url: null,
      thumbnailUrl: null
    }
  },
  methods: {

    loadDate: function () {
      this.$http.get(API_URL)
        .then(response => {
          console.log(response)
          this.list = response.body
        }, () => {
          this.list = []
        })
    },
     goMember: function () {
      this.$router.push('/Members')
    },
     onSubmit: function () {
      alert("SUCCESS!"),
      this.$router.push('/Members'),
      this.$http.post(API_URL,
        {title: this.title, url: this.url, thumbnailUrl: this.thumbnailUrl}
      ).then(response => {
        this.backToHome()
      }, response => {
        this.backToHome()
      })
    },
    backToHome: function () {
      this.$router.push({name: 'Home'})
    }
  },
  
  
}
</script>
<style>
button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
label{
  font-size:30px
}
legend{
  font-size:24px
}
input,p{
  font-size:24px
}

</style>
