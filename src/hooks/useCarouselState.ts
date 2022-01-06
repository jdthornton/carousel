import { useContext } from 'react';

import { CarouselStateContext } from '../provider/context';

export default function useCarouselState() {
  const context = useContext(CarouselStateContext);
  if (context === undefined) {
    throw new Error('useCarouselState must be used within a CarouselProvider');
  }
  return context;
}
