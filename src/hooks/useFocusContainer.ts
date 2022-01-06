import { useEffect } from 'react';
import useCarouselHandlers from './useCarouselHandlers';

export default function useFocusContainer(
  autoFocus?: boolean,
) {
  const { focusRef, focus, unfocus } = useCarouselHandlers();
  useEffect(() => {
    if(autoFocus && focusRef?.current){
      focusRef.current.focus()
    }
  },[autoFocus,focusRef])
  const focusHandler = () => focusRef?.current?.focus()
  return {
    tabIndex: 0,
    onFocus: focus,
    ref: focusRef,
    onMouseEnter: focusHandler,
    onClick: focusHandler,
    onBlur: unfocus,
    onMouseLeave: () => focusRef?.current?.blur()
  }
}
