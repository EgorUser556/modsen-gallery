export interface CategoryCardModel {
  title: string;
  query: string;
  imageUrl?: string;
}

export interface CategoryCardProps {
  card: CategoryCardModel;
  onClick: () => void;
}
