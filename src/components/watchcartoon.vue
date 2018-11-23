<template>
  <div>
    <h1 >Story...............</h1>
    <h2 align = 'center' >Ep1 : ......................</h2>
    <br>
    <br>
    <br>
    <h3 align = 'center'> UI for watch , next page ,back page </h3>
    <br>
    <button type="button" class="btn btn-default btn-lg" @click="goMember">
          <span class="glyphicon glyphicon-plus" aria-hidden="true" ></span> Back
   </button>
  </div>
</template>
<script>

  export default {
    methods: {
     goMember: function () {
      this.$router.push('/')
    }
  }
  }
  
  
</script>
