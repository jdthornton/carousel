import { useReducer, useMemo, useRef, ReactNode } from 'react';

import carouselReducer, { initialState } from './reducer';
import { setScrollAction, setSliderAction, setFocusAction } from './actions';
import { CarouselStateContext, CarouselHandlersContext } from './context';
import { SlidePayload } from '../types';

export default function CarouselProvider({
  children
}: { children: ReactNode; }) {
  const [state,dispatch] = useReducer(carouselReducer,initialState)
  const ref = useRef<HTMLDivElement>(null);
  const focusRef = useRef<HTMLDivElement>(null);
  const handlers = useMemo(() => ({
    ref,
    focusRef,
    focus: () => dispatch(setFocusAction(true)),
    unfocus: () => dispatch(setFocusAction(false)),
    scrollContainer: (scroll: number,smooth: boolean = true) => {
      if(ref?.current){
        ref.current.scroll({
          top: scroll,
          left: scroll,
          ...(smooth ? {behavior: "smooth"} : {})
        })
      }
    },
    setScroll: (scroll: number) => dispatch(setScrollAction(scroll)),
    setSlider: (payload: SlidePayload) => dispatch(setSliderAction(payload)),
  }), [])

  return (
    <CarouselStateContext.Provider value={state}>
      <CarouselHandlersContext.Provider value={handlers}>
        {children}
      </CarouselHandlersContext.Provider>
    </CarouselStateContext.Provider>
  )
}
