import { Context } from '@koishijs/client'
import live2d from './live2d.vue'
export default (ctx: Context) => {
  ctx.slot({
    type: "global",
    component: live2d
  })
}
