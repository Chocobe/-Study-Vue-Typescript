<template>
	<div>
		<h1>My Test Page</h1>

		<MyInput v-model="value" :secondValue.sync="value_2"></MyInput>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import MyInput from "./MyInput.vue";

export default Vue.extend({
	name: "MyTestPage.vue",

	components: {
		MyInput,
	},

	data: () => {
		return {
			value: "Hello",
			value_2: "World",
		};
	},
});
</script>

<style scoped></style>
