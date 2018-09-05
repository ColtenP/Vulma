<template>
  <button
    class="button"
    :class="componentClasses"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  /* Color Props */
  @Prop({ type: Boolean })
  private isWhite: boolean;

  @Prop({ type: Boolean })
  private isLight: boolean;

  @Prop({ type: Boolean })
  private isDark: boolean;

  @Prop({ type: Boolean })
  private isBlack: boolean;

  @Prop({ type: Boolean })
  private isText: boolean;

  @Prop({ type: Boolean })
  private isPrimary: boolean;

  @Prop({ type: Boolean })
  private isLink: boolean;

  @Prop({ type: Boolean })
  private isInfo: boolean;

  @Prop({ type: Boolean })
  private isSuccess: boolean;

  @Prop({ type: Boolean })
  private isWarning: boolean;

  @Prop({ type: Boolean })
  private isDanger: boolean;

  /* Size Props */
  @Prop({ type: Boolean })
  private isSmall: boolean;

  @Prop({ type: Boolean })
  private isNormal: boolean;

  @Prop({ type: Boolean })
  private isMedium: boolean;

  @Prop({ type: Boolean })
  private isLarge: boolean;

  /* Style Props */
  @Prop({ type: Boolean })
  private isOutlined: boolean;

  @Prop({ type: Boolean })
  private isInverted: boolean;

  @Prop({ type: Boolean })
  private isRounded: boolean;

  /* State Props */
  @Prop({ type: Boolean })
  private isHovered: boolean;

  @Prop({ type: Boolean })
  private isFocused: boolean;

  @Prop({ type: Boolean })
  private isActive: boolean;

  @Prop({ type: Boolean })
  private isLoading: boolean;

  @Prop({ type: Boolean })
  private isStatic: boolean;

  @Prop({ type: Boolean })
  private isSelected: boolean;

  get componentClasses () {
    const classes: string[] = []

    if (this.isWhite) {
      classes.push('is-white')
    } else if (this.isLight) {
      classes.push('is-light')
    } else if (this.isDark) {
      classes.push('is-dark')
    } else if (this.isBlack) {
      classes.push('is-black')
    } else if (this.isText) {
      classes.push('is-text')
    } else if (this.isPrimary) {
      classes.push('is-primary')
    } else if (this.isLink) {
      classes.push('is-link')
    } else if (this.isInfo) {
      classes.push('is-info')
    } else if (this.isSuccess) {
      classes.push('is-success')
    } else if (this.isWarning) {
      classes.push('is-warning')
    } else if (this.isDanger) {
      classes.push('is-danger')
    }

    if (this.isSmall) {
      classes.push('is-small')
    } else if (this.isMedium) {
      classes.push('is-medium')
    } else if (this.isLarge) {
      classes.push('is-large')
    }

    if (this.isOutlined) {
      classes.push('is-outlined')
    }

    if (this.isInverted) {
      classes.push('is-inverted')
    }

    if (this.isRounded) {
      classes.push('is-rounded')
    }

    if (this.isHovered) {
      classes.push('is-hovered')
    }

    if (this.isFocused) {
      classes.push('is-focused')
    }

    if (this.isActive) {
      classes.push('is-active')
    }

    if (this.isLoading) {
      classes.push('is-loading')
    }

    if (this.isStatic) {
      classes.push('is-static')
    }

    if (this.isSelected) {
      classes.push('is-selected')
    }

    return classes
  }
}
</script>
