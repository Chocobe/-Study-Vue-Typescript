<script lang="tsx">
import { 
  defineComponent,
  ref,
} from "@vue/composition-api";
import MainLayout from "@layouts/MainLayout.vue";
import TodoInsert from "@components/TodoInsert.vue";
import TodoList from "@components/TodoList.vue";

export default defineComponent({
  setup() {
    const todos = ref([
      {
        id: 0,
        text: "리액트의 기초를 알아보기",
        checked: true,
      },
      {
        id: 1,
        text: "리액트 Hooks 스터디 하기",
        checked: true,
      },
      {
        id: 2,
        text: "Todo List App 만들기",
        checked: false,
      },
    ]);

    const handleToggle = (id: number) => {
      todos.value = todos.value.map(todo => {
        return todo.id === id
          ? { ...todo, checked: !todo.checked }
          : todo;
      });
    };

    const nextId = ref(3);

    const handleInsertTodo = (text: string) => {
      todos.value = todos.value.concat({
        id: nextId.value,
        text,
        checked: false,
      });

      nextId.value++;
    };

    const handleRemove = (id: number) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    return {
      todos,
      handleToggle,
      handleInsertTodo,
      handleRemove,
    };
  },
  
  render() {
    const { 
      todos,
      handleToggle,
      handleInsertTodo,
      handleRemove,
    } = this;
    
    const mainLayoutProps = {
      scopedSlots: {
        insertion: () => (
          <todo-insert
            onInsertTodo={handleInsertTodo}
          />
        ),
        list: () => (
          <todo-list 
            todos={todos}
            onToggleChecked={handleToggle}
            onRemove={handleRemove}
          />
        ),
      },
    };
    
    return (
      <div class="App">
        <main-layout {...mainLayoutProps} />
      </div>
    );
  },

  components: {
    MainLayout,
    TodoInsert,
    TodoList,
  },
});
</script>