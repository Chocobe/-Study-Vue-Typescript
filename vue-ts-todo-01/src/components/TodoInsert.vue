<script lang="tsx">
import { 
  defineComponent,
  ref,
} from "@vue/composition-api";
import MdPlus from "vue-material-design-icons/Plus.vue"

export default defineComponent({
  setup(_, { emit }) {
    const value = ref("");
    const onInput = (e: KeyboardEvent) => {
      value.value = (e.target as HTMLInputElement).value;
    };

    const onSubmit = (e: Event) => {
      e.preventDefault();
      emit("insertTodo", value.value);
      value.value = "";
    };

    return {
      value,
      onInput,
      onSubmit,
    };
  },
  
  render() {
    const { value, onInput, onSubmit } = this;
    
    return (
      <form 
        class="TodoInsert"
        onSubmit={onSubmit}
      >
        <input
          class="input"
          placeholder="할 일을 입력하세요"
          value={value}
          onInput={onInput}
        />

        <button
          class="button"
        >
          <md-plus size={34} fill-color="#fff" />
        </button>
      </form>
    );
  },

  components: {
    MdPlus,
  },
});
</script>

<style lang="scss" scoped>
.TodoInsert {
  @apply flex;

  .input {
    @apply py-12 px-20;
    @apply flex-1;
    @apply outline-none;
    @apply text-custom-gray-02;
    @apply bg-custom-gray-05;
  }

  .button {
    @apply px-8;
    @apply bg-custom-gray-02;
  }
}
</style>