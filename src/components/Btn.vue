
<button :class="btnColor">
  <slot></slot>
  <img v-if="cartIcon" src="../assets/images/cart.svg" alt="Cart Icon">
</button>

<script>
export default {
  props: ['btnColor', 'cartIcon']
}
</script>

<style scoped>

</style>
