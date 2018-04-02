import { ComponentOptions } from 'vue'


export interface Headful {
  [key: string]: any
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    headful?: Headful | {
      (vm?: V): Headful
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $headful<T extends object>(props: T): void
    headful?: Headful
  }
}
