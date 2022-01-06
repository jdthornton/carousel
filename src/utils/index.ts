export const getScrollFromIdx = (newScroll: number,maxScroll: number, isOffset: boolean) => isOffset ? maxScroll - newScroll : newScroll
export const orientIndex = (idx: number,stepCount: number, isOffset: boolean) => isOffset ? stepCount - idx : idx

export const getIdxFromScroll = (scroll: number,stepWidth: number, stepCount: number, maxScroll: number, isOffset: boolean) => orientIndex(Math.round(getScrollFromIdx(scroll,maxScroll,isOffset) / stepWidth),stepCount,isOffset)

export const mergeStyles = (a: any = {},b: any = {}) => ({
  ...a,
  ...b
})

export const getStyleSizeKey = (isVertical?: boolean) => isVertical ? "height" : "width"
export const getScrollKey = (isVertical?: boolean) => isVertical ? "top" : "left"
