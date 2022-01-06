import { useContext } from 'react';

import { CarouselHandlersContext } from '../provider/context';

export default function useCarouselHandlers() {
  const context = useContext(CarouselHandlersContext);
  if (context === undefined) {
    throw new Error('useCarouselHandlers must be used within a CarouselProvider');
  }
  return context;
};
