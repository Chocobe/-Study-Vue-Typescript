<script lang="tsx">
import { 
  defineComponent,
  PropType,
} from "@vue/composition-api";
import MdCheckboxBlankOutline from "vue-material-design-icons/CheckboxBlankOutline.vue";
import MdCheckbox from "vue-material-design-icons/CheckboxMarkedOutline.vue"
import MdDeleteEmpty from "vue-material-design-icons/DeleteEmpty.vue";

import cn from "classnames";

export default defineComponent({
  props: {
    todo: {
      required: true,
      type: Object as PropType<{
        id: number;
        text: string;
        checked: boolean;
      }>,
    },
  },

  setup({ todo }, { emit }) {
    const toggleChecked = () => {
      emit("toggleChecked", todo.id);
    };

    const remove = () => {
      emit("remove", todo.id);
    };

    return {
      toggleChecked,
      remove,
    };
  },
  
  render() {
    const { toggleChecked, remove } = this;
    const { id, text, checked } = this.todo;

    return (
      <div class="TodoListItem">
        <div 
          class={cn("content", { checked })}
          onClick={toggleChecked}
        >
          <div class="checkbox">
            {checked
              ? <MdCheckbox fill-color="#22B8CF" />
              : <MdCheckboxBlankOutline />
            }
          </div>

          <div class="text">
            {text}
          </div>
        </div>

        <button 
          class="remove"
          onClick={remove}
        >
          <md-delete-empty fill-color="#FF6B6B" />
        </button>
      </div>
    );
  },

  components: {
    MdCheckboxBlankOutline,
    MdDeleteEmpty,
  },
});
</script>

<style lang="scss" scoped>
.TodoListItem {
  @apply py-16 px-20;
  @apply flex items-center;

  &:nth-child(even) {
    @apply bg-custom-gray-01;
  }

  & + & {
    border-top: 1px solid #ddd;
  }

  .content {
    @apply flex-1;
    @apply flex items-center;
    @apply cursor-pointer;

    .checkbox {
      @apply mr-8;
    }

    .text {
      //
    }

    &.checked {
      //

      .checkbox {
        //
      }

      .text {
        @apply text-custom-gray-02;
        @apply line-through;
      }
    }
  }

  .remove {
    //
  }
}
</style>