export function closest (el: HTMLElement, ctx: HTMLElement): HTMLElement {
  if (el) {
    ctx = ctx || document

    while (el) {
      if (el.parentNode === ctx) {
        return el
      } else {
        el = el.parentNode as HTMLElement
      }

      if (el === ctx) break
    }
  }

  return el
}
