import useFocusContainer from '../../hooks/useFocusContainer';

import { FocusContainerProps } from '../../types';

export default function FocusContainer ({
  children,
  autoFocus,
  ...props
}: FocusContainerProps){
  const focusContainer = useFocusContainer(autoFocus);
  return(
    <div {...props} {...focusContainer}>
      {children}
    </div>
  )
}
