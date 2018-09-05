<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>
