import useEventListener from '@jdthornton/useeventlistener';
import useStep from '../../hooks/useStep';
import { KeyboardControlsProps } from '../../types';

export function useKeyboardControls(props: KeyboardControlsProps){
  const { takeStep, isFocused } = useStep(props.infinite);

  useEventListener((props.controlOnFocus ? isFocused : true) ? 'keyup' : null, (e) => {
    if(e.which === props.prevKeycode){
      takeStep(-1)
    } else if(e.which === props.nextKeycode){
      takeStep()
    }
  })
}
export default function KeyboardControls(props: KeyboardControlsProps){
  useKeyboardControls(props)
  return null;
}
