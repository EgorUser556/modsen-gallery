import './CategoryPage.css';

import CategoryCard from '@components/CategoryCard/CategoryCard';
import useCategoryCards from '@hooks/useCategoryCards';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigate = useNavigate();
  const { cards, loading } = useCategoryCards();

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
