<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box content">
        <h1 class="title is-4" v-if="title">{{ title }}</h1>

        <div class="columns is-mobile" v-if="message && !inputAttrs">
          <div class="column is-narrow is-icon-column" :class="iconClasses" v-if="icon">
            <VIcon :icon="icon" is-large />
          </div>
          <div class="column">
            {{ message }}
          </div>
        </div>

        <div class="buttons is-right">
          <button class="button" :class="confirmClasses" v-if="canConfirm" @click="onConfirmAction">{{ confirmText }}</button>
          <button class="button" :class="cancelClasses" v-if="canCancel" @click="onCancelAction">{{ cancelText }}</button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="onCancelAction" v-if="canClose"></button>
  </div>
</template>

<script lang="ts">
import Modal from '../Modal/Modal.vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Dialog extends Modal {
  // General Options
  @Prop({ type: String })
  private title?: string

  @Prop({ type: String })
  private message?: string

  @Prop({ type: Boolean, default: () => true })
  private canClose: boolean;

  // Closures for onConfirm and onCancel
  @Prop({ type: Function, default: () => () => {} })
  private onConfirm: typeof Function;

  @Prop({ type: Function, default: () => () => {} })
  private onCancel: typeof Function;

  // Icon Options
  @Prop({ type: String })
  private icon?: string

  @Prop({ type: String, default: () => '' })
  private iconColor: string;

  // Confirm Options
  @Prop({ type: Boolean, default: () => true })
  private canConfirm: boolean;

  @Prop({ type: String, default: () => 'Confirm' })
  private confirmText: string;

  @Prop({ type: String, default: () => 'primary' })
  private confirmColor: string;

  // Cancel Options
  @Prop({ type: Boolean, default: () => false })
  private canCancel: boolean;

  @Prop({ type: String, default: () => 'Cancel' })
  private cancelText: string;

  @Prop({ type: String, default: () => '' })
  private cancelColor: string;

  public onConfirmAction () {
    this.onConfirm.apply(null, ['Confirmed'])
    this.onClose()
  }

  public onCancelAction () {
    this.onCancel.apply(null, ['Cancelled'])
    this.onClose()
  }

  get iconClasses () {
    if (this.iconColor) {
      return `has-text-${this.iconColor.toLowerCase()}`
    }
  }

  get confirmClasses () {
    const classes = []

    if (this.confirmColor) {
      classes.push(`is-${this.confirmColor.toLowerCase()}`)
    }

    return classes
  }

  get cancelClasses () {
    const classes = []

    if (this.cancelColor) {
      classes.push(`is-${this.cancelColor.toLowerCase()}`)
    }

    return classes
  }
}
</script>

<style lang="scss" scoped>
  @import "~bulma";

  @include mobile {
    .modal {
      justify-content: flex-end;
      align-items: flex-end;

      .modal-content {
        margin: 0;
        justify-content: flex-start;
        align-items: flex-start;

        .box {
          border-radius: 0;
        }
      }
    }
  }

  .modal {
    .modal-content {
      .column.is-icon-column {
        padding-left: 2rem;
      }
    }
  }
</style>
