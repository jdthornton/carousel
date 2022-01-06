import { Fragment } from 'react';
import classNames from '@jdthornton/classnames';
import useStep from '../../hooks/useStep';
import { DotsProps } from '../../types';
import { mergeStyles } from '../../utils';

export default function Dots({
  className,
  disable,
  dotStyle,
  dark,
  overlay,
  isVertical,
  activeDotStyle,
  dotClassName,
  activeDotClassName,
  showOnFocus,
  renderDot = ({isActive,onClick}) => (
    <button type="button" disabled={disable} className={classNames("Carousel__dot", !disable && "Carousel__dot--clickable",dotClassName,isActive && classNames("Carousel__dot--active",activeDotClassName))} style={mergeStyles(dotStyle,isActive && activeDotStyle)} onClick={disable ? undefined : onClick} />
  ),
  ...props
}: DotsProps){
  const {setStep,idx,count,isFocused} = useStep();
  const makeDotClickHandler = (step: number) => () => {
    setStep(step)
  }
  const steps = [];
  for (var i = 0; i <= count; i++) {
     steps.push(i);
  }
  return(
    <div {...props} className={classNames("Carousel__dots", dark && "Carousel__dots--dark", isVertical && "Carousel__dots--vert", overlay && "Carousel__dots--overlay", showOnFocus && "Carousel__dots--focusable",  isFocused && "Carousel__dots--focused", className)}>
      {steps.map(step =>
        <Fragment key={step}>
          {renderDot({
            step,
            isActive: idx === step,
            onClick: makeDotClickHandler(step)
          })}
        </Fragment>
      )}
    </div>
  )
}
