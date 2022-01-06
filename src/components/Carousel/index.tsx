import cn from '@jdthornton/classnames'
import CarouselProvider from '../../provider';
import Slider from '../Slider';
import Dots from '../Dots';
import KeyboardControls from '../KeyboardControls';
import AutoPlay from '../AutoPlay';
import Scrollbar from '../Scrollbar';
import FocusContainer from '../FocusContainer';
import { PreviousArrow, NextArrow } from '../Arrows';
import { mergeStyles } from '../../utils';
import { CarouselProps } from '../../types';

const Carousel = ({
  children,
  className,
  style,
  infinite,
  autoPlay,
  autoFocus,
  scrollable,
  disableControls,
  disableKeyboard,
  showOnFocus,
  controlOnFocus = true,
  stopOnFocus,
  interval,
  classNames = {},
  styles = {},
  visibleCount,
  isVertical = false,
  overlayControls = true,
  dark = false,
  dotsOverlay = overlayControls,
  dotsIsVertical = isVertical,
  dotsDark = dark,
  dotsShowOnFocus = showOnFocus,
  dotsHide,
  arrowsOverlay = overlayControls,
  arrowsIsVertical = isVertical,
  arrowsDark = dark,
  arrowsShowOnFocus = showOnFocus,
  arrowsHide,
  scrollbarOverlay = overlayControls,
  scrollbarIsVertical = isVertical,
  scrollbarDark = dark,
  scrollbarShowOnFocus = showOnFocus,
  scrollbarHide,
  sliderIsVertical = isVertical,
  step,
  prevKeycode = isVertical ? 38 : 37,
  nextKeycode = isVertical ? 40 : 39,
  renderNextArrow,
  renderPrevArrow,
  renderDot
}: CarouselProps) => (
  <CarouselProvider>
    <FocusContainer className={cn("Carousel", isVertical && "Carousel--vert", className)} style={style} autoFocus={autoFocus}>
      <div className={cn("Carousel__container", classNames.container)} style={styles.container}>
        {!arrowsHide && (
          <PreviousArrow className={cn(classNames.arrow,classNames.prevArrow)} style={mergeStyles(styles.arrow,styles.prevArrow)} disable={disableControls} enable={infinite} renderArrow={renderPrevArrow} dark={arrowsDark} overlay={arrowsOverlay} isVertical={arrowsIsVertical} showOnFocus={arrowsShowOnFocus} />
        )}
        <Slider className={cn(!disableControls && scrollable && "Carousel__slider--scrollable",classNames.slider)} style={styles.slider} visibleCount={visibleCount} isVertical={sliderIsVertical} step={step}>
          {children}
        </Slider>
        {!arrowsHide && (
          <NextArrow className={cn(classNames.arrow,classNames.nextArrow)} style={mergeStyles(styles.arrow,styles.nextArrow)} disable={disableControls} enable={infinite} renderArrow={renderNextArrow} dark={arrowsDark} overlay={arrowsOverlay} isVertical={arrowsIsVertical} showOnFocus={arrowsShowOnFocus} />
        )}
      </div>
      {!scrollbarHide && <Scrollbar dark={scrollbarDark} isVertical={scrollbarIsVertical} overlay={scrollbarOverlay} showOnFocus={scrollbarShowOnFocus} disable={disableControls} />}

      {!dotsHide && (
        <Dots className={classNames.dots} style={styles.dots} renderDot={renderDot} disable={disableControls} dotStyle={styles.dot} activeDotStyle={styles.activeDot} dark={dotsDark} dotClassName={classNames.dot} activeDotClassName={classNames.activeDot} isVertical={dotsIsVertical} overlay={dotsOverlay} showOnFocus={dotsShowOnFocus} />
      )}
    </FocusContainer>
    {autoPlay && <AutoPlay interval={interval} infinite={infinite} stopOnFocus={stopOnFocus} />}
    {!disableControls && !disableKeyboard && <KeyboardControls prevKeycode={prevKeycode} nextKeycode={nextKeycode} infinite={infinite} controlOnFocus={controlOnFocus} />}
  </CarouselProvider>
)

export default Carousel
