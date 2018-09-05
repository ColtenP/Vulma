import Vue from 'vue'
import Dialog from './Dialog.vue'

function open (propsData: any = {}) {
  const vm: typeof Vue = window && (window as any).Vue ? (window as any).Vue : Vue
  const DialogComponent = vm.extend(Dialog)
  return new DialogComponent({
    el: document.createElement('div'),
    propsData: {
      ...propsData,
      isProgrammatic: true
    }
  })
}

const DialogProgrammtic = {
  confirm (params: any) {
    const d = open(params)
    console.log(d)
    return d
  }
}

export default DialogProgrammtic
