<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="onClose"></button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop({ type: Boolean })
  protected isProgrammatic: boolean;

  protected created () {
    if (window) {
      window.document.addEventListener('keyup', this.onKeyPress)
      window.document.body.classList.add('is-noscroll')
    }
  }

  protected beforeMount () {
    if (this.isProgrammatic && window) {
      window.document.body.appendChild(this.$el)
    }
  }

  protected beforeDestroyed () {
    if (window) {
      document.removeEventListener('keyup', this.onKeyPress)
      window.document.body.classList.add('is-noscroll')
    }
  }

  public onClose () {
    this.$emit('close')

    if (this.isProgrammatic) {
      this.$nextTick(() => {
        this.$destroy()
        if (this.$el.remove) {
          this.$el.remove()
        } else if (this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el)
        }
      })
    }
  }

  public onKeyPress (event: KeyboardEvent) {
    if (event.keyCode === 27) {
      this.$emit('close')
    }
  }
}
</script>
