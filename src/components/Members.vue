<template>
  <v-layout column>
    <span style="text-align:center;color:blue;font-size:30px">
        <img src="@/assets/member.png" /><br><br>
    </span>
   <span style="color:blue;font-size:30px">
     <h1 align='center'></h1> 
    <table align="center">
    <tr>
      <th>
          <img src="@/assets/beam.png" width="300" height="300"/>
      </th>
      <th><img src="@/assets/ju.png" align='center'  width="300" height="300"/></th>
      <th><img src="@/assets/boom.jpg" align='center'  width="300" height="300"/></th>
      </tr>
      <tr>
      <td>นาย วรรธนัย ศิริรักษ์  </td>
      <td>นาย ไวชยันต์ นุ้ยสวี  </td>
      <td>นาย สุทธิกิจ เจริญวงศ์กิจ </td>
        </tr>
        <tr>
        <td>5810110298</td>
        <td>5810110316</td>
        <td>5810110353</td>
        </tr>
       </table>  
       <br/>
       <br/>
         
   </span>   
   <button type="button" class="btn btn-default btn-lg" @click="goMember">
          <span class="glyphicon glyphicon-plus" aria-hidden="true" ></span> Back
   </button>
    
  </v-layout>
  
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
