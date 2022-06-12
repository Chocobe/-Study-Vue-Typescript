<script lang="tsx">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  render() {
    const insertionSlot = this.$scopedSlots.insertion as Function;
    const listSlot = this.$scopedSlots.list as Function;
    
    return (
      <div class="MainLayout">
        <div class="title">
          Todo List
        </div>

        {insertionSlot?.()}
        {listSlot?.()}
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.MainLayout {
  @apply mx-auto mt-80;
  @apply overflow-hidden;

  width: 500px;
  border-radius: 8px;

  .title {
    @apply py-16 px-20;
    @apply text-white;
    @apply text-center;
    @apply font-semibold;
    @apply bg-custom-blue-01;

    font-size: 20px;
  }
}
</style>