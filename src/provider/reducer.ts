import { State, ActionKind, Action } from '../types';
import { getIdxFromScroll } from '../utils';

export const initialState: State = {offset: 1, idx: 0,size: 0,scroll: 0,stepCount: 0,maxScroll: 0,stepSize: 0,visibleCount: 0,step: 0,slideSize: 0,slideCount: 0,isVertical: false,hasPrev: false,hasNext: true, isFocused: false};

export default function carouselReducer(state: State = initialState, {type,payload}: Action): State {
  switch (type) {
    case ActionKind.SetSlider:
      const d = { ...state, ...payload } as State;
      d.slideSize = d.size / d.visibleCount
      d.maxScroll = Math.floor(d.slideSize * d.slideCount - d.size)
      d.stepSize = d.slideSize * d.step
      d.stepCount = Math.ceil(d.maxScroll / d.stepSize);
      return d
    case ActionKind.SetFocus:
      return { ...state, isFocused: payload }
    case ActionKind.SetScroll:
      const s = {...state, scroll: payload.scroll} as State;
      if(s.scroll <= 0){
        s.offset = 1
        s.idx = 0
      } else if(s.scroll >= s.maxScroll){
        s.offset = -1
        s.idx = s.stepCount
      } else {
        s.idx = getIdxFromScroll(s.scroll,s.stepSize,s.stepCount,s.maxScroll,s.offset === -1)
      }
      s.hasPrev = s.idx > 0
      s.hasNext = s.idx < s.stepCount
      return s
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}
