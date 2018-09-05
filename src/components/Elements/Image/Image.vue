<template>
  <figure class="image" :class="componentClasses">
    <img :src="src" :class="{ 'is-rounded': isRounded }"/>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Image extends Vue {
  @Prop()
  private src: string;

  @Prop({ type: Boolean })
  private isRounded: boolean;

  get componentClasses () {
    return Object.keys(this.$attrs).map(item => item.toLowerCase())
  }
}
</script>
