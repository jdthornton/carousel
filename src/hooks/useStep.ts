import { useCallback } from 'react';

import useCarouselHandlers from './useCarouselHandlers';
import useCarouselState from './useCarouselState';
import { getScrollFromIdx, orientIndex } from '../utils';

export default function useStep(infinite?: boolean) {
  const { scrollContainer } = useCarouselHandlers();
  const { idx, stepCount, hasPrev, hasNext, maxScroll, stepSize, offset, isFocused } = useCarouselState();
  const _getScrollFromIdx = useCallback(
    (_idx: number,direction = 0) => {
      const isOffset = offset === -1
      return getScrollFromIdx(
        (orientIndex(_idx,stepCount,isOffset) + (offset * direction)) * stepSize,
        maxScroll,
        isOffset
      )
    },
    [offset,stepCount,stepSize,maxScroll]
  )
  return {
    idx,
    isFocused,
    count: stepCount,
    setStep: (_idx: number) => scrollContainer(_getScrollFromIdx(_idx)),
    takeStep: (direction: number = 1) => {
      const isNext = direction === 1;
      const hasMore = isNext ? hasNext : hasPrev;
      if(hasMore || infinite){
        const wrapScroll = isNext ? 0 : maxScroll;
        scrollContainer(hasMore ? (
          _getScrollFromIdx(idx,direction)
        ) : (
          wrapScroll
        ))
      }
    },
    hasPrev,
    hasNext
  }
}
