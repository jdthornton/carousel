import classNames from '@jdthornton/classnames';
import useStep from '../../hooks/useStep';
import { DefaultArrowProps, PreviousArrowProps, NextArrowProps } from '../../types';

const DefaultArrow = ({
  hasMore,
  onClick,
  disable,
  className,
  style,
  dark,
  overlay,
  isVertical,
  showOnFocus,
  isFocused,
  ...props
}: DefaultArrowProps) => (
  <button type="button" className={classNames("Carousel__arrow", dark && "Carousel__arrow--dark", isVertical && "Carousel__arrow--vert", overlay && "Carousel__arrow--overlay", showOnFocus && "Carousel__arrow--focusable", isFocused && "Carousel__arrow--focused", !hasMore && "Carousel__arrow--disabled", className)} disabled={(disable || !hasMore) ? true : false} onClick={onClick} style={style} {...props} />
)

export function PreviousArrow({
  className,
  disable,
  enable,
  style,
  dark,
  overlay,
  isVertical,
  showOnFocus,
  renderArrow = ({hasPrev,...props}) => (
    <DefaultArrow aria-label="Carousel next slide" hasMore={enable || hasPrev} className={classNames("Carousel__arrow--prev",className)} disable={disable} style={style} dark={dark} overlay={overlay} isVertical={isVertical} showOnFocus={showOnFocus} {...props} />
  )
}: PreviousArrowProps){
  const { hasPrev, takeStep, isFocused } = useStep(enable);
  return(<>
    {renderArrow({
      hasPrev,
      isFocused,
      onClick: () => takeStep(-1)
    })}
  </>)
}

export function NextArrow({
  className,
  disable,
  enable,
  style,
  dark,
  overlay,
  isVertical,
  showOnFocus,
  renderArrow = ({hasNext,...props}) => (
    <DefaultArrow aria-label="Carousel next slide" hasMore={enable || hasNext} className={classNames("Carousel__arrow--next",className)} disable={disable} style={style} dark={dark} overlay={overlay} isVertical={isVertical} showOnFocus={showOnFocus} {...props} />
  )
}: NextArrowProps){
  const { hasNext, takeStep, isFocused } = useStep(enable);
  return(<>
    {renderArrow({
      hasNext,
      isFocused,
      onClick: () => takeStep()
    })}
  </>)
}
