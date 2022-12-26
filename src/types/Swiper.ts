import {
  PaginationProps,
  SwiperFlatList,
  SwiperFlatListProps,
} from 'react-native-swiper-flatlist';

export type SwiperRefProps = SwiperFlatList;

export type SwiperProps<T> = SwiperFlatListProps<T> & {
  swiperRef?: React.Ref<SwiperRefProps>;
  id?: string;
  accessibility: string;
  testID?: string;
};
export type SwiperPaginationProps = PaginationProps;
