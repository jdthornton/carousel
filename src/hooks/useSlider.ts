import { useCallback, useEffect, useMemo, Children, ReactNode, cloneElement, isValidElement, UIEvent } from 'react';

import useCarouselHandlers from './useCarouselHandlers';
import useCarouselState from './useCarouselState';
import useSize from './useSize';
import { getStyleSizeKey } from '../utils';

export default function useSlider(
  visibleCount: number,
  step: number,
  children: ReactNode,
  isVertical?: boolean
) {
  const { setSlider, ref, setScroll } = useCarouselHandlers();
  const { slideSize } = useCarouselState();
  const onScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    const newScroll = isVertical ? e.currentTarget.scrollTop : e.currentTarget.scrollLeft;
    setScroll(newScroll)
  },[isVertical,setScroll])
  useSize(ref, (size: number) => setSlider({size}),isVertical)
  useEffect(() => {
    setSlider({
      visibleCount,
      slideCount: Children.count(children),
      isVertical,
      step
    })
  },[visibleCount,step,children,isVertical])
  const slides = useMemo(() => {
    const slideProps = {style:{[getStyleSizeKey(isVertical)]: `${slideSize}px`, flexGrow: 0, flexShrink: 0}}
    return Children.map(children, (child) => isValidElement(child) ? cloneElement(child, slideProps) : child)
  },[children,slideSize,isVertical])
  return {
    sliderProps: {
      ref,
      onScroll
    },
    slides
  }
}
