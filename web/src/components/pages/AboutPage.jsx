import React from 'react';

const DEFAULT_CATEGORIES = [
  'Business', 'Entertainment', 'Health', 'National', 'Opinion',
  'Science', 'Sports', 'Technology', 'World'
];

export const AboutPage = ({ categories = [] }) => {
  const categoryNames = categories.length > 0
    ? DEFAULT_CATEGORIES.filter((categoryName) => categories.some((category) => category.name.toLowerCase() === categoryName.toLowerCase()))
    : DEFAULT_CATEGORIES;

  return (
    <article className="gn-info-page animate-fade-in">
      <div className="gn-info-page-header">
        <p className="gn-info-eyebrow">The CourantNews newsroom</p>
        <h1>About CourantNews</h1>
        <p className="gn-info-intro">
          CourantNews is a modern digital news platform bringing readers timely, clear, and meaningful stories from India and around the world.
        </p>
      </div>

      <div className="gn-info-section-grid">
        <section className="gn-info-section">
          <p className="gn-info-section-number">01</p>
          <div>
            <h2>Our Mission</h2>
            <p>Our goal is simple: inform quickly, explain clearly, and keep readers connected to the stories that matter.</p>
          </div>
        </section>

        <section className="gn-info-section">
          <p className="gn-info-section-number">02</p>
          <div>
            <h2>What We Cover</h2>
            <div className="gn-category-card-grid">
              {categoryNames.map((category) => <span key={category} className="gn-category-card">{category}</span>)}
            </div>
          </div>
        </section>

        <section className="gn-info-section">
          <p className="gn-info-section-number">03</p>
          <div>
            <h2>Our Approach</h2>
            <p>CourantNews focuses on making news easy to understand without losing the context behind the story. We aim to present important developments in a clear, accessible, and reader-friendly format.</p>
          </div>
        </section>
      </div>

      <p className="gn-info-closing">Stay informed. Stay curious. Stay connected.</p>
    </article>
  );
};