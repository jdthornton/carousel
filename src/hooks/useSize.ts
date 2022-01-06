import { useEffect, useCallback, RefObject } from 'react';
import useEventListener from '@jdthornton/useeventlistener';
import { getStyleSizeKey } from '../utils';

export default function useSize(ref: RefObject<HTMLDivElement>,setSize: (width: number) => void, isVertical?: boolean){
  const _setSize = useCallback(() => {
    if(ref?.current){
      const box = ref.current.getBoundingClientRect()
      setSize(box[getStyleSizeKey(isVertical)])
    }
  },[isVertical])
  useEventListener('resize', _setSize)
  useEffect(() => {
    _setSize();
  },[_setSize])
}
