<template>
  <div class="hero" :class="classes">
    <div :class="{ 'container': isContained }">
      <slot name="before"></slot>
      <div class="hero-head">
        <slot name="head"></slot>
      </div>
      <div class="hero-body">
        <slot name="body"></slot>
      </div>
      <div class="hero-foot">
        <slot name="foot"></slot>
      </div>
      <slot name="after"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Hero extends Vue {
  @Prop({ type: Boolean })
  private isContained: boolean;

  get classes () {
    return Object.keys(this.$attrs)
  }
}
</script>
