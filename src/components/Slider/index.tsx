import classNames from '@jdthornton/classnames';
import useSlider from '../../hooks/useSlider';

import { SliderProps } from '../../types';

export default function Slider ({
  isVertical,
  children,
  className,
  visibleCount = 1,
  step = visibleCount,
  ...props
}: SliderProps){
  const {sliderProps,slides} = useSlider(visibleCount,step,children,isVertical);
  return(
    <div {...props} className={classNames("Carousel__slider", isVertical && "Carousel__slider--vert", className)} {...sliderProps}>
      {slides}
    </div>
  )
}
