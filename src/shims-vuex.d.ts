import { name } from '@/Tab1Page.vue';// path to store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $name: name;
  }
}