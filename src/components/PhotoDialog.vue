<template>
	<v-dialog
		v-model="dialogVisible"
		max-width="600">
		<v-card>
			<v-card-title>{{photo.title}}</v-card-title>
			<v-card-text>
				<v-img
					:src="photo.url"
				/>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default{
	props:{
		photo: {
			type: Object,
			required: true,

		},
		value: {
			type: Boolean,
			default: false,
		}
	},
	created(){
		this.dialogVisible = this.value
	},
	data: () => ({
		dialogVisible: false
	}),

	methods:{},
	watch: {
		value(newValue){
			this.$emit('input', newValue)
		}
	},
	name: 'PhotoDialog',
}
</script>