import iconCategory from '@assets/category-default.svg';
import iconCategoryActive from '@assets/category-hover.svg';
import iconFav from '@assets/favourites-default.svg';
import iconFavActive from '@assets/favourites-hover.svg';
import iconImages from '@assets/image-default.svg';
import iconImagesActive from '@assets/image-hover.svg';

export const ICONS_BY_TO = {
  '/category': { default: iconCategory, active: iconCategoryActive },
  '/images': { default: iconImages, active: iconImagesActive },
  '/favourites': { default: iconFav, active: iconFavActive },
} as const;

export type IconKey = keyof typeof ICONS_BY_TO;
