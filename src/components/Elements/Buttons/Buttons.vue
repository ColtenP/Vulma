<template>
  <div class="buttons" :class="componentClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Buttons extends Vue {
  @Prop({ type: Boolean })
  private isLeft: boolean;

  @Prop({ type: Boolean })
  private isCentered: boolean;

  @Prop({ type: Boolean })
  private isRight: boolean;

  @Prop({ type: Boolean })
  private hasAddons: boolean;

  get componentClasses () {
    const classes: string[] = []

    if (this.isRight) {
      classes.push('is-right')
    } else if (this.isCentered) {
      classes.push('is-centered')
    } else {
      classes.push('is-left')
    }

    if (this.hasAddons) {
      classes.push('has-addons')
    }

    return classes
  }
}
</script>
