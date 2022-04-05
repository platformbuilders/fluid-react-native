import { has } from 'lodash';

import { ThemeType } from '../src/types/theme_types/Theme';

const extractValue = (itemValue: any, parentKey: any): any => {
  const itemMap = {};
  if (has(itemValue, 'value')) {
    itemMap[parentKey] = itemValue.value;
  } else {
    const itemObjMap = new Map(Object.entries(itemValue));
    itemObjMap.forEach((item: any, itemKey) => {
      if (has(item, 'value')) {
        itemMap[itemKey] = item.value;
      } else {
        itemMap[itemKey] = extractValue(item, itemKey);
      }
    });
  }
  return itemMap;
};

export const themeFormatter = (rawTheme: any): ThemeType => {
  const objMap = new Map(Object.entries(rawTheme));
  const themeMap = {} as ThemeType;
  objMap.forEach((item: any, parentKey) => {
    const itemMap = extractValue(item, parentKey);
    themeMap[parentKey] = itemMap;
  });
  return themeMap;
};
