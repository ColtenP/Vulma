<template>
  <div>
    <VSection>
      <VContainer>
        <VImage src="https://bulma.io/images/placeholders/128x128.png" is-128x128 is-rounded />
      </VContainer>
    </VSection>

    <VFooter>
      <VContainer>
        <h1 class="title">Hello World!</h1>
      </VContainer>
    </VFooter>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="sass" src="bulma/bulma.sass"></style>
