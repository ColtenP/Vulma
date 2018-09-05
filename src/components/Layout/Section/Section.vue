<template>
  <section class="section" :class="componentClasses">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Section extends Vue {
  /* Size Props */
  @Prop({ type: Boolean })
  private isMedium: boolean;

  @Prop({ type: Boolean })
  private isLarge: boolean;

  get componentClasses () {
    const classes: string[] = []

    if (this.isMedium) {
      classes.push('is-medium')
    } else if (this.isLarge) {
      classes.push('is-large')
    }

    return classes
  }
}
</script>
