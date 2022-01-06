import { useRef, useState, TouchEvent, MouseEvent } from 'react';
import useEventListener from '@jdthornton/useeventlistener';
import useCarouselHandlers from './useCarouselHandlers';
import useCarouselState from './useCarouselState';
import useSize from './useSize';
import { getStyleSizeKey, getScrollKey } from '../utils';

export default function useScrollbar(isVertical?: boolean,disable?: boolean) {
  const { scrollContainer } = useCarouselHandlers();
  const { scroll, size, maxScroll, isFocused } = useCarouselState();
  const [refSize,setRefSize] = useState(0);
  const [dragStart,setDragStart] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const carouselSize = maxScroll + size;

  const onThumbDrag = (e: any) => {
    if(ref?.current){
      const dragDistance = getDragDistance(e,ref.current,isVertical)
      scrollContainer(((dragDistance - dragStart) / refSize) * (carouselSize), false)
    }
  }

  useEventListener(dragStart ? "mousemove" : null,onThumbDrag,document)
  useEventListener(dragStart ? "touchmove" : null,onThumbDrag,document)

  const endDrag = () => setDragStart(0)
  useEventListener(dragStart ? "mouseup" : null,endDrag,document)
  useEventListener(dragStart ? "touchend" : null,endDrag,document)

  useSize(ref,setRefSize,isVertical);

  const startDrag = (e: any) => setDragStart(getDragDistance(e,e.target as HTMLDivElement,isVertical))

  return {
    isFocused,
    scrollbarProps: {
      ref
    },
    thumbProps: {
      style: {[getStyleSizeKey(isVertical)]: `${size / carouselSize * 100}%`, [getScrollKey(isVertical)]: (scroll / (maxScroll + size)) * refSize},
      ...(disable ? ({}) : ({
        onMouseDown: startDrag,
        onTouchStart: startDrag
      }))
    }
  }
}
function isTouchEvent(e: TouchEvent | MouseEvent): e is TouchEvent {
  return e && 'touches' in e;
}

function isMouseEvent(e: TouchEvent | MouseEvent): e is MouseEvent {
  return e && 'screenX' in e;
}
const getTouchPosition = (e: TouchEvent, isVertical?: boolean) => isVertical ? e.targetTouches[0].pageY : e.targetTouches[0].pageX
const getClickPosition = (e: MouseEvent, isVertical?: boolean) => isVertical ? e.clientY : e.clientX
const getPositionFromEvent = (e: any,isVertical?: boolean) => {
  if(isTouchEvent(e)){
    return getTouchPosition(e,isVertical)
  } else if(isMouseEvent(e)) {
    return getClickPosition(e,isVertical)
  }
}
const getDragDistance = (e: any, el: HTMLDivElement, isVertical?: boolean) => {
  const scrollKey = getScrollKey(isVertical);
  const box = el.getBoundingClientRect()
  const p = getPositionFromEvent(e,isVertical)
  return (p && p > box[scrollKey]) ? p - box[scrollKey] : 0
}
