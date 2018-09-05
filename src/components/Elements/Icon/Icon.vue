<template>
  <span class="icon" :class="iconClasses">
    <FontAwesomeIcon :icon="icon" v-bind="$attrs" :size="faSize" />
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class Icon extends Vue {
  @Prop({ type: Boolean })
  private isSmall: boolean;

  @Prop({ type: Boolean })
  private isMedium: boolean;

  @Prop({ type: Boolean })
  private isLarge: boolean;

  @Prop({ type: String })
  private icon: string;

  get iconClasses () {
    if (this.isSmall) {
      return ['is-small']
    } else if (this.isMedium) {
      return ['is-medium']
    } else if (this.isLarge) {
      return ['is-large']
    } else {
      return []
    }
  }

  get faSize () {
    if (this.isSmall) {
      return 'lg'
    } else if (this.isMedium) {
      return '2x'
    } else if (this.isLarge) {
      return '3x'
    } else {
      return 'lg'
    }
  }
}
</script>
