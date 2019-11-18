<template>
  <v-app id="inspire">

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon/>
      <v-toolbar-title>Board</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
  
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
