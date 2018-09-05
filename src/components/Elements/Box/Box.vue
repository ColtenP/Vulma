<template>
  <div class="box" :class="componentClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Section extends Vue {
  get componentClasses () {
    return Object.keys(this.$attrs).map(item => item.toLowerCase())
  }
}
</script>
