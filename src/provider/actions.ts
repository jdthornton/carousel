import { SlidePayload, ActionKind, Action } from '../types';

export const setScrollAction = (
  scroll: number
): Action => ({
  type: ActionKind.SetScroll,
  payload: { scroll }
})

export const setSliderAction = (
  payload: SlidePayload
): Action => ({
  type: ActionKind.SetSlider,
  payload
})
export const setFocusAction = (
  payload: boolean
): Action => ({
  type: ActionKind.SetFocus,
  payload
})
