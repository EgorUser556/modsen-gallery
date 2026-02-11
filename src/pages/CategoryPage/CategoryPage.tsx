import './CategoryPage.css';

import CategoryCard from '@components/CategoryCard/CategoryCard';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Loader from '@components/Loader/Loader';
import TopImage from '@components/TopImage/TopImage';
import useCategoryCards from '@hooks/useCategoryCards';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigate = useNavigate();
  const { cards, loading, error } = useCategoryCards();
  if (error) throw error;
  const handleCardClick = (query: string) => {
    navigate(`/images?query=${encodeURIComponent(query)}`);
  };
  return (
    <main className="category">
      <TopImage>
        <h1 className="category__title">
          Let&apos;s Find Some <br />
          <span>Images</span> Here!
        </h1>
      </TopImage>
      <section className="category__content">
        <ErrorBoundary>
          {loading ? (
            <Loader />
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
        </ErrorBoundary>
      </section>
    </main>
  );
};

export default CategoryPage;
