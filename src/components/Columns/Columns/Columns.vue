<template>
  <div class="columns" :class="componentClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Columns extends Vue {
  get componentClasses () {
    const classes: string[] = Object.keys(this.$attrs)

    return classes
  }
}
</script>
