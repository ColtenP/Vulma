<template>
  <div class="container" :class="componentClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Container extends Vue {
  /* Breakpoint Props */
  @Prop({ type: Boolean })
  private isFluid: boolean;

  @Prop({ type: Boolean })
  private isWidescreen: boolean;

  @Prop({ type: Boolean })
  private isFullscreen: boolean;

  get componentClasses () {
    const classes: string[] = []

    if (this.isFluid) {
      classes.push('is-fluid')
    }

    if (this.isWidescreen) {
      classes.push('is-widescreen')
    } else if (this.isFullscreen) {
      classes.push('is-fullscreen')
    }

    return classes
  }
}
</script>
