import React, { PropsWithChildren } from 'react';
import { Pagination, SwiperFlatList } from 'react-native-swiper-flatlist';
import { SwiperProps } from '../../types';

const Swiper = ({
  swiperRef,
  children,
  id,
  accessibility,
  testID,
  ...rest
}: PropsWithChildren<SwiperProps<any>>) => {
  return (
    <SwiperFlatList
      ref={swiperRef}
      accessibilityLabel={accessibility}
      testID={testID || id || accessibility}
      e2eID={testID || id || accessibility}
      {...rest}
    >
      {children}
    </SwiperFlatList>
  );
};

const SwiperPagination = Pagination;

export { Swiper, SwiperPagination };
