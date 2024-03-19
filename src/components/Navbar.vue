<template>
	<v-container fluid>
    <v-app-bar
      color="green"
      dark
      >
    <v-btn outlined class="ml-6"><router-link to='/'>Главная</router-link>
	</v-btn>
    <v-btn outlined class="ml-6"><router-link to='/photo'>Фотографии</router-link></v-btn>
    </v-app-bar>
    </v-container>
</template>

<script>
export default{
	name: 'NavBar',
}
</script>
