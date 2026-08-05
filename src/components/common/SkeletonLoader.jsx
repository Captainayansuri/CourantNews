import React from 'react';

export const SkeletonLoader = ({ type = 'feed' }) => {
  if (type === 'article') {
    return (
      <div className="skeleton-article-wrapper">
        <div className="skeleton" style={{ height: '24px', width: '30%', marginBottom: '16px' }} />
        <div className="skeleton" style={{ height: '44px', width: '85%', marginBottom: '16px' }} />
        <div className="skeleton" style={{ height: '20px', width: '60%', marginBottom: '24px' }} />
        <div className="skeleton" style={{ height: '360px', width: '100%', borderRadius: '12px', marginBottom: '24px' }} />
        <div className="skeleton" style={{ height: '18px', width: '100%', marginBottom: '12px' }} />
        <div className="skeleton" style={{ height: '18px', width: '95%', marginBottom: '12px' }} />
        <div className="skeleton" style={{ height: '18px', width: '90%', marginBottom: '12px' }} />
      </div>
    );
  }

  return (
    <div className="skeleton-feed-wrapper">
      <div className="skeleton-card">
        <div className="skeleton" style={{ height: '20px', width: '25%', marginBottom: '12px' }} />
        <div className="skeleton" style={{ height: '28px', width: '80%', marginBottom: '12px' }} />
        <div className="skeleton" style={{ height: '16px', width: '95%', marginBottom: '8px' }} />
        <div className="skeleton" style={{ height: '16px', width: '70%', marginBottom: '16px' }} />
        <div className="skeleton" style={{ height: '180px', width: '100%', borderRadius: '12px' }} />
      </div>
    </div>
  );
};
