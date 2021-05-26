<template>
	<div>
		<label for="todo-input">오늘 할 일</label>
		<input id="todo-input" type="text" :value="item" @input="handleInput" />
		<button @click="addTodo" type="text">추가</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	// props: ["item"],
	props: {
		item: {
			type: String,
			required: true,
		},
	},

	methods: {
		addTodo() {
			this.$emit("add");
		},

		handleInput(event: InputEvent) {
			const targetElement = event.target as HTMLInputElement;
			this.$emit("input", targetElement.value);
		},
	},
});
</script>

<style scoped></style>
