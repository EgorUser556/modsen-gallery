import './CategoryPage.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchPhotos } from '../../api/unplash';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CATEGORIES from '../../constants/categories';
import type { CategoryCardModel } from '../../types/CategoryCardType';

const CategoryPage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<CategoryCardModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      try {
        const results = await Promise.all(
          CATEGORIES.map(async (category) => {
            const photos = await searchPhotos(category.query, 1);
            const img = photos[0]?.urls?.small;

            return {
              title: category.title,
              query: category.query,
              imageUrl: img,
            };
          }),
        );

        if (!cancelled) {
          setCards(results);
        }
      } catch {
        if (!cancelled) {
          setCards(
            CATEGORIES.map((category) => ({
              title: category.title,
              query: category.query,
            })),
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleCardClick = (query: string) => {
    navigate(`/images?query=${encodeURIComponent(query)}`);
  };

  return (
    <main className="category">
      <section className="category__hero">
        <h1 className="category__title">
          Let&apos;s Find Some <br />
          <span>Images</span> Here!
        </h1>
      </section>
      <section className="category__content">
        {loading ? (
          <div className="category__loading">Loading...</div>
        ) : (
          <div className="category__grid">
            {cards.map((card) => (
              <CategoryCard
                key={card.query}
                card={card}
                onClick={() => handleCardClick(card.query)}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
