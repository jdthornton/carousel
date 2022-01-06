import useInterval from '@jdthornton/useinterval';
import useStep from '../../hooks/useStep';
import { AutoPlayProps } from '../../types';

export function useAutoPlay({
  infinite,
  stopOnFocus,
  interval = 3000
}: AutoPlayProps){
  const { takeStep, isFocused, hasNext } = useStep(infinite);
  useInterval(() => takeStep(), ((infinite || hasNext) && (stopOnFocus ? !isFocused : true)) ? interval : null)
}

export default function AutoPlay(props: AutoPlayProps){
  useAutoPlay(props)
  return null;
}
