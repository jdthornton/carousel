import { createContext } from 'react';
import { initialState } from './reducer';

import { State } from '../types';

export const CarouselStateContext = createContext<State>(initialState);
export const CarouselHandlersContext = createContext<any>(null);
