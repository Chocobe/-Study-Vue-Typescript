<template>
	<div>
		<header>
			<h1>Vue Todo with Typescript</h1>
		</header>

		<main>
			<TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem"></TodoInput>

			<div>
				<ul>
					<template v-for="(todoItem, index) in todoItems">
						<TodoListItem
							:todoItem="todoItem"
							:index="index"
							:key="index"
							@remove="removeItem"
							@toggle="toggleTodoItemComplete"
						></TodoListItem>
					</template>
				</ul>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";

const storage = {
	save(todoItems: Todo[]) {
		const parsed = JSON.stringify(todoItems);
		localStorage.setItem(STORAGE_KEY, parsed);
	},

	fetch(): Todo[] {
		const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
		return JSON.parse(todoItems);
	},
};

export interface Todo {
	title: string;
	done: boolean;
}

export default Vue.extend({
	components: {
		TodoInput,
		TodoListItem,
	},

	data: () => {
		return {
			todoText: "",
			todoItems: [] as Todo[],
		};
	},

	methods: {
		updateTodoText(value: string) {
			this.todoText = value;
		},

		addTodoItem() {
			const value = this.todoText;

			const todo: Todo = {
				title: value,
				done: false,
			};

			this.todoItems.push(todo);
			storage.save(this.todoItems);

			this.initTodoText();
		},

		initTodoText(): void {
			this.todoText = "";
		},

		fetchTodoItems(): void {
			this.todoItems = storage.fetch().sort((a, b) => {
				if (a.title < b.title) return -1;
				else if (a.title > b.title) return 1;
				else return 0;
			});
		},

		removeItem(index: number) {
			this.todoItems.splice(index, 1);
			storage.save(this.todoItems);
		},

		toggleTodoItemComplete(todoItem: Todo, index: number): void {
			this.todoItems.splice(index, 1, {
				...todoItem,
				done: !todoItem.done,
			});
			storage.save(this.todoItems);
		},
	},

	created() {
		this.fetchTodoItems();
	},
});
</script>

<style scoped></style>
