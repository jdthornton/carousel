import classNames from '@jdthornton/classnames';
import useScrollbar from '../../hooks/useScrollbar';
import { ScrollbarProps } from '../../types';

export default function Scrollbar ({
  isVertical,
  dark,
  overlay,
  className,
  showOnFocus,
  disable,
  ...props
}: ScrollbarProps){
  const {scrollbarProps,thumbProps,isFocused} = useScrollbar(isVertical,disable);
  return(
    <div {...props} className={classNames("Carousel__scrollbar", dark && "Carousel__scrollbar--dark", overlay && "Carousel__scrollbar--overlay", isVertical && "Carousel__scrollbar--vert", showOnFocus && "Carousel__scrollbar--focusable",  isFocused && "Carousel__scrollbar--focused", disable && "Carousel__scrollbar--disabled", className)} {...scrollbarProps}>
      <div {...thumbProps} />
    </div>
  )
}
