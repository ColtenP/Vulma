<template>
  <div class="level">
    <div class="level-left" v-if="$slots.left || $slots.right">
      <slot name="left"></slot>
    </div>
    <div class="level-right" v-if="$slots.left || $slots.right">
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Level extends Vue {}
</script>
