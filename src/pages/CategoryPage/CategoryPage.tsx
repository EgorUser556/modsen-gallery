import './CategoryPage.css';

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchPhotos } from '../../api/unplash';
import CATEGORIES from '../../constants/categories';

interface CategoryCardModel {
  title: string;
  query: string;
  imageUrl?: string;
}

const CategoryPage = () => {
  const navigate = useNavigate();
  const base = useMemo(() => CATEGORIES, []);
  const [cards, setCards] = useState<CategoryCardModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      try {
        const results = await Promise.all(
          base.map(async (c) => {
            const photos = await searchPhotos(c.query, 1);
            const img = photos[0]?.urls?.small;
            return { title: c.title, query: c.query, imageUrl: img };
          }),
        );

        if (!cancelled) setCards(results);
      } catch {
        if (!cancelled) {
          setCards(base.map((c) => ({ title: c.title, query: c.query })));
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [base]);

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
            {cards.map((c) => (
              <button
                key={c.query}
                className="categoryCard"
                onClick={async () => navigate(`/images?query=${encodeURIComponent(c.query)}`)}
                type="button"
              >
                {c.imageUrl ? (
                  <img
                    alt={c.title}
                    className="categoryCard__img"
                    loading="lazy"
                    src={c.imageUrl}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="categoryCard__img categoryCard__img--placeholder"
                  />
                )}

                <div className="categoryCard__label">{c.title}</div>
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
