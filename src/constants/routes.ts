import type { ComponentType } from 'react';
import { lazy } from 'react';

export const routesPaths = {
  category: '/category',
  images: '/images',
  favourites: '/favourites',
} as const;

export interface AppRoute {
  path: string;
  Component: ComponentType;
}

export const routes: AppRoute[] = [
  {
    path: routesPaths.category,
    Component: lazy(async () => import('@pages/CategoryPage/CategoryPage')),
  },
  { path: routesPaths.images, Component: lazy(async () => import('@pages/ImagesPage/ImagesPage')) },
  {
    path: routesPaths.favourites,
    Component: lazy(async () => import('@pages/FavouritePage/FavouritePage')),
  },
  { path: '*', Component: lazy(async () => import('@pages/NotFoundPage/NotFoundPage')) },
];
