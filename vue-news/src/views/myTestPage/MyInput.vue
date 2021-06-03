<template>
	<div>
		<input type="text" :value="value" @input="$emit('input', $event.target.value)" />
		<input type="text" :value="secondValue" @input="emitSecondValue($event)" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Input.vue",

	props: {
		value: {
			type: String,
			default: null,
		},

		secondValue: {
			type: String,
			default: "123",
		},
	},

	methods: {
		emitSecondValue(event: Event) {
			const targetElement = event.target as HTMLInputElement;
			const value = targetElement.value;
			console.log("$event: ", event);
			this.$emit("update:secondValue", value);
		},
	},
});
</script>

<style scoped></style>
