<template>
  <div><h1  align = 'center'>Select cartoon</h1>
    <h2 align = 'center' >choose your cartoon</h2>
    <br>
    <br>
    <br>
    <h3 align = 'center'> UI for select cartoons</h3>
    <br>
    <button type="button" class="btn btn-default btn-lg" @click="goWatch">
          <span class="glyphicon glyphicon-plus" aria-hidden="true" ></span> Go
   </button>
    <button type="button" class="btn btn-default btn-lg" @click="goMember">
          <span class="glyphicon glyphicon-plus" aria-hidden="true" ></span> Back
   </button></div>
    
</template>
<script>

  export default {
    methods: {
     goMember: function () {
      this.$router.push('/')
    },
    goWatch: function(){
      this.$router.push('/watchcartoon')
    }
  }
  }
  
  
</script>
