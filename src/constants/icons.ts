import iconCategory from '@assets/category-default.svg';
import iconCategoryActive from '@assets/category-hover.svg';
import iconFav from '@assets/favourites-default.svg';
import iconFavActive from '@assets/favourites-hover.svg';
import iconFb from '@assets/fb.svg';
import iconGh from '@assets/gh.svg';
import iconIg from '@assets/ig.svg';
import iconImages from '@assets/image-default.svg';
import iconImagesActive from '@assets/image-hover.svg';
import iconX from '@assets/x.svg';

export const ICONS_BY_TO = {
  '/category': { default: iconCategory, active: iconCategoryActive },
  '/images': { default: iconImages, active: iconImagesActive },
  '/favourites': { default: iconFav, active: iconFavActive },
} as const;

export const SOCIAL = [
  { key: 'fb', icon: iconFb, label: 'Facebook' },
  { key: 'ig', icon: iconIg, label: 'Instagram' },
  { key: 'x', icon: iconX, label: 'X' },
  { key: 'yt', icon: iconGh, label: 'YouTube' },
] as const;

export type IconKey = keyof typeof ICONS_BY_TO;
