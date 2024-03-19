<template>
  <v-app>
    <NavBar/>
    <router-view/>
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>