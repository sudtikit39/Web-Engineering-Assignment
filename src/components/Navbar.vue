<template>
  <v-toolbar class="black" >
  <ul><link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
      <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
  </ul>
  
    <v-toolbar-title class="headline text-uppercase" >
     <b-link href="#/">
     <v-icon dark right>face  </v-icon>
     &nbsp;
      <spam>MANGA  </spam>
      <spam class = "font-weight-light">NET</spam>
      </b-link>
  </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">


      <div class="text-xs-center">



          <div>


            <v-btn color="red" dark> <b-link href="#/">Logout</b-link>
              <v-icon dark right>exit_to_app  </v-icon>
            </v-btn>


          </div>


          <div>
            <v-btn flat icon color="blue lighten-2">
              <v-icon>thumb_up</v-icon>
            </v-btn>

            <v-btn flat icon color="red lighten-2">
              <v-icon>thumb_down</v-icon>
            </v-btn>
          </div>
        </div>

    </v-toolbar-items>

  </v-toolbar>


</template>

<script>
export default{
  name: 'MaterialIcons'

}
</script>
