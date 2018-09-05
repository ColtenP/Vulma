<template>
  <div class="column" :class="componentClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Column extends Vue {
  get componentClasses () {
    const classes: string[] = Object.keys(this.$attrs)

    return classes
  }
}
</script>
