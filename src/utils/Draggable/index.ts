import {
  closest
} from '../index'

type Options = {
  element: HTMLElement,
  dragElementClassName?: string
  onChange: (e: {
    beforeIdx: number,
    afterIdx: number
  }) => void
}

class Draggable {
  parent: HTMLElement
  referenceElement: HTMLElement | null
  isPointerdown: boolean
  drag: {
    element: HTMLElement | null,
    index: number,
    firstIndex: number
  }

  options: Options

  rectList: DOMRect[]

  constructor (options: Options) {
    this.options = options
    if (options.element === null) throw new Error('parent can not be null')
    this.parent = options.element // 父级元素
    this.isPointerdown = false
    this.drag = { element: null, index: 0, firstIndex: 0 } // 当前拖拽的元素
    this.referenceElement = null // 参考元素，用于记录移动元素之后插入的位置

    this.rectList = [] // 用于保存拖拽项getBoundingClientRect()方法获得的数据
    this.init()
  }

  init (): void {
    this.getRect()
    this.bindEventListener()
  }

  // 获取元素位置信息
  getRect (): void {
    this.rectList.length = 0
    for (const item of this.parent.children) {
      this.rectList.push(item.getBoundingClientRect())
    }
  }

  handlePointerdown (e: PointerEvent): void {
    this.isPointerdown = true

    this.drag.element = closest(e.target as HTMLElement, this.parent)
    this.drag.element.classList.add(this.options.dragElementClassName || 'active')
    const i = Array.from(this.parent.children).findIndex(item => item === this.drag.element)
    this.drag.index = i
    this.drag.firstIndex = i
  }

  handlePointermove (e: PointerEvent): void {
    if (this.isPointerdown) {
      for (let i = 0; i < this.rectList.length; i++) {
        if (
          this.drag.index !== i &&
          // 鼠标在元素的水平范围内
          e.clientX > this.rectList[i].left && e.clientX < this.rectList[i].right &&
          // 鼠标在元素的垂直范围内
          e.clientY > this.rectList[i].top && e.clientY < this.rectList[i].bottom
        ) {
          this.options.onChange({
            beforeIdx: this.drag.index,
            afterIdx: i
          })
          this.drag.index = i
          break
        }
      }
    }
  }

  handlePointerup (): void {
    this.isPointerdown = false
    this.drag.element!.classList.remove(this.options.dragElementClassName || 'active')
  }

  bindEventListener (): void {
    this.getRect = this.getRect.bind(this)
    this.parent.addEventListener('pointerdown', this.handlePointerdown.bind(this))
    this.parent.addEventListener('pointermove', this.handlePointermove.bind(this))
    this.parent.addEventListener('pointerup', this.handlePointerup.bind(this))
    window.addEventListener('scroll', this.getRect)
    window.addEventListener('resize', this.getRect)
  }
}

export default Draggable
