// type defaults = {
//   group?: null,
//   sort?: boolean,
//   disabled?: boolean,
//   store?: null,
//   handle?: null,
//   draggable?: '>li' | '>*',
//   swapThreshold?: number, // percentage; 0 <= x <= 1
//   invertSwap?: false, // invert always
//   invertedSwapThreshold?: null, // will be set to same as swapThreshold if default
//   removeCloneOnHide?: true,
//   direction?: void,
//   ghostClass?: 'sortable-ghost',
//   chosenClass?: 'sortable-chosen',
//   dragClass?: 'sortable-drag',
//   ignore?: 'a, img',

//   animation?: number,
//   easing: null,
//   setData: void,
//   dropBubble: false,
//   dragoverBubble: false,
//   dataIdAttr: 'data-id',
//   delay?: number,
//   delayOnTouchOnly: false,
//   touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
//   fallbackClass?: 'sortable-fallback',
//   fallbackOffset: { x: 0, y: 0 },
// };
const defaultOptions = {
  group: null,
  sort: true,
  disabled: false,
  store: null,
  handle: null,
  draggable: '>li' || '>*',
  swapThreshold: 1, // percentage; 0 <= x <= 1
  invertSwap: false, // invert always
  invertedSwapThreshold: null, // will be set to same as swapThreshold if default
  removeCloneOnHide: true,
  direction: function () {
    return 'vertical'
  },
  ghostClass: 'sortable-ghost',
  chosenClass: 'sortable-chosen',
  dragClass: 'sortable-drag',
  ignore: 'a, img',
  filter: null,
  preventOnFilter: true,
  animation: 0,
  easing: null,
  // setData: function (dataTransfer, dragEl) {
  //   dataTransfer.setData('Text', dragEl.textContent)
  // },
  dropBubble: false,
  dragoverBubble: false,
  dataIdAttr: 'data-id',
  delay: 0,
  delayOnTouchOnly: false,
  touchStartThreshold: 1,
  forceFallback: false,
  fallbackClass: 'sortable-fallback',
  fallbackOnBody: false,
  fallbackTolerance: 0,
  fallbackOffset: { x: 0, y: 0 },
  supportPointer: false,
  emptyInsertThreshold: 5
}

export type defaults = typeof defaultOptions
