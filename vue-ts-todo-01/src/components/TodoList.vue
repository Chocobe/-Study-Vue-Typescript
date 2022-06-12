<script lang="tsx">
import { defineComponent, PropType } from "@vue/composition-api";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  props: {
    todos: {
      default: () => [],
      type: Array as PropType<{
        id: number;
        text: string;
        checked: boolean;
      }[]>,
    },
  },

  render() {
    const { todos, $listeners } = this;

    return (
      <div class="TodoList">
        {todos.map(todo => (
          <TodoListItem 
            key={todo.id} 
            todo={todo}
            onToggleChecked={$listeners.toggleChecked}
            onRemove={$listeners.remove}
          />
        ))}
      </div>
    );
  },

  components: {
    TodoListItem,
  },
});
</script>

<style lang="scss" scoped>
.TodoList {
  @apply overflow-y-auto;
  @apply bg-white;
  
  height: 300px;
}
</style>