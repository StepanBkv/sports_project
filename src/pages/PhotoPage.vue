import axios from 'axios';
<template>
	<v-container>
		<PhotoForm @addPhoto="addPhoto"/>
		<v-row>
			<PhotoAll 
				v-for="(photo) in photos" 
				:key="photo.id"
				:photo="photo"
				@openPhoto="openPhoto"
			/>
		</v-row>
		<PhotoDialog :photo="currentPhoto" v-model="dialogVisible"/>		
    </v-container>
</template>

<script>
import PhotoDialog from '@/components/PhotoDialog';
import PhotoAll from '@/components/Photo';
import PhotoForm from '@/components/PhotoForm';
export default{
	components:{
		PhotoAll, PhotoForm, PhotoDialog
	},
	name: 'PhotoPage',
	data: () => ({
		photos: [],
		currentPhoto: {},
		dialogVisible: false,
	}),
	mounted(){
		this.givemePhotos()
	},
	methods: {
		givemePhotos(){
			this.axios.get("https://jsonplaceholder.typicode.com/photos?_limit= 8").then(response => this.photos = response.data)
		},
		addPhoto(photo){
			this.photos.push(photo)
		},
		openPhoto(photo){
			this.currentPhoto = photo
			this.dialogVisible = true
		}
	}
}
</script>
