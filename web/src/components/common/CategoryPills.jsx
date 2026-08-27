import React from 'react';

export const CategoryPills = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="gn-pills-bar">
      <div className="gn-pills-scroll">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.slug;
          return (
            <button
              key={cat.id}
              className={`gn-pill-chip ${isActive ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.slug)}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <style>{`
        .gn-pills-bar {
          margin-bottom: 20px;
          overflow: hidden;
        }

        .gn-pills-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: none; /* Firefox */
        }

        .gn-pills-scroll::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .gn-pill-chip {
          padding: 8px 16px;
          border-radius: var(--chip-radius);
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.15s;
        }

        .gn-pill-chip:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-pill-chip.active {
          background-color: var(--accent-light);
          color: var(--accent-color);
          border-color: transparent;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
