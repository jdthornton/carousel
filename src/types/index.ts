import { ReactNode, CSSProperties, MouseEventHandler, TouchEvent, MouseEvent, HTMLAttributes } from "react";

type RenderArrowProps = {
  onClick: MouseEventHandler<HTMLElement>;
  isFocused?: boolean;
}

type RenderNextArrowProps = {
  hasNext: boolean;
} & RenderArrowProps

type RenderPrevArrowProps = {
  hasPrev: boolean;
} & RenderArrowProps

type RenderNextArrow = (a: RenderNextArrowProps) => ReactNode;
type RenderPrevArrow = (a: RenderPrevArrowProps) => ReactNode;

type Arrow = {
  className?: string;
  disable?: boolean;
  dark?: boolean;
  overlay?: boolean;
  isVertical?: boolean;
  showOnFocus?: boolean;
  style?: CSSProperties;
}

type ArrowProps = {
  enable?: boolean;
} & Arrow
export type PreviousArrowProps = {
  renderArrow?: RenderPrevArrow
} & ArrowProps
export type NextArrowProps = {
  renderArrow?: RenderNextArrow
} & ArrowProps
export type DefaultArrowProps = {
  hasMore: boolean;
} & Arrow & RenderArrowProps

interface DotProps {
  step: number;
  isActive: boolean;
  onClick: () => void;
}

export type DragEvent = (TouchEvent | MouseEvent);

export interface DotsProps extends HTMLAttributes<HTMLDivElement> {
  disable?: boolean;
  dark?: boolean;
  isVertical?: boolean;
  overlay?: boolean;
  showOnFocus?: boolean;
  dotStyle?: CSSProperties;
  activeDotStyle?: CSSProperties;
  dotClassName?: string;
  activeDotClassName?: string;
  renderDot?: (a: DotProps) => ReactNode;
}
export interface ScrollbarProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  overlay?: boolean;
  isVertical?: boolean;
  showOnFocus?: boolean;
  disable?: boolean;
}
export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  visibleCount?: number;
  step?: number;
  isVertical?: boolean;
}

export enum ActionKind {
  SetSlider = "SET_SLIDER",
  SetScroll = "SET_SCROLL",
  SetFocus = "SET_FOCUS"
}

export interface SlidePayload {
  visibleCount?: number;
  slideCount?: number;
  isVertical?: boolean;
  step?: number;
}

export interface Action {
  type: ActionKind;
  payload?: any;
}

export interface State {
  offset: number;
  idx: number;
  size: number;
  scroll: number;
  stepCount: number;
  maxScroll: number;
  stepSize: number;
  step: number;
  visibleCount: number;
  slideSize: number;
  slideCount: number;
  isVertical: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  isFocused: boolean;
}

export interface AutoPlayProps {
  interval?: number;
  infinite?: boolean;
  stopOnFocus?: boolean;
}
export interface KeyboardControlsProps {
  prevKeycode: number;
  nextKeycode: number;
  infinite?: boolean;
  controlOnFocus?: boolean;
}

export interface FocusContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  autoFocus?: boolean;
}
interface StylesProps {
  container?: CSSProperties;
  arrow?: CSSProperties;
  slider?: CSSProperties;
  dots?: CSSProperties;
  dot?: CSSProperties;
  prevArrow?: CSSProperties;
  nextArrow?: CSSProperties;
  activeDot?: CSSProperties;
}

interface ClassNamesProps {
  container?: string;
  arrow?: string;
  slider?: string;
  dots?: string;
  dot?: string;
  prevArrow?: string;
  nextArrow?: string;
  activeDot?: string;
}

export interface CarouselProps {
  children: ReactNode;
  renderNextArrow?: RenderNextArrow;
  renderPrevArrow?: RenderPrevArrow;
  renderDot?: (a: DotProps) => ReactNode;
  className?: string;
  classNames?: ClassNamesProps;
  styles?: StylesProps;
  visibleCount?: number;
  style?: CSSProperties;
  step?: number;
  arrowsHide?: boolean;
  infinite?: boolean;
  scrollable?: boolean;
  dotsHide?: boolean;
  disableKeyboard?: boolean;
  disableControls?: boolean;
  autoPlay?: boolean;
  autoFocus?: boolean;
  interval?: number;
  dark?: boolean;
  overlayControls?: boolean;
  isVertical?: boolean;
  showOnFocus?: boolean;
  controlOnFocus?: boolean;
  stopOnFocus?: boolean;
  prevKeycode?: number;
  nextKeycode?: number;
  dotsOverlay?: boolean;
  dotsIsVertical?: boolean;
  dotsDark?: boolean;
  dotsShowOnFocus?: boolean;
  arrowsOverlay?: boolean;
  arrowsIsVertical?: boolean;
  arrowsDark?: boolean;
  arrowsShowOnFocus?: boolean;
  scrollbarOverlay?: boolean;
  scrollbarIsVertical?: boolean;
  scrollbarDark?: boolean;
  scrollbarShowOnFocus?: boolean;
  scrollbarHide?: boolean;
  sliderIsVertical?: boolean;
}
