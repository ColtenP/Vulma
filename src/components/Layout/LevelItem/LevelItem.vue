<template>
  <div class="level-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LevelItem extends Vue {}
</script>
