import React, { useState } from 'react';
import { X, Plus, Image as ImageIcon, Check } from 'lucide-react';
import { storageService } from '../../services/storageService';

export const MediaLibraryModal = ({ onSelectImage, onClose }) => {
  const [assets, setAssets] = useState(storageService.getMediaAssets());
  const [newUrl, setNewUrl] = useState('');
  const [newName, setNewName] = useState('');

  const handleAddMedia = (e) => {
    e.preventDefault();
    if (newUrl.trim()) {
      const created = storageService.saveMediaAsset({
        name: newName.trim() || 'Uploaded Media',
        url: newUrl.trim(),
        category: 'general'
      });
      setAssets([created, ...assets]);
      setNewUrl('');
      setNewName('');
    }
  };

  return (
    <div className="gn-modal-overlay">
      <div className="gn-media-card animate-fade-in">
        <div className="gn-media-header">
          <h3>Media Library & Presets</h3>
          <button className="gn-close-modal-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleAddMedia} className="gn-media-add-form">
          <input
            type="url"
            placeholder="Paste Image URL (https://...)"
            required
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <input
            type="text"
            placeholder="Caption / Name (Optional)"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button type="submit" className="gn-add-media-btn">
            <Plus size={16} /> Add Image
          </button>
        </form>

        <div className="gn-media-grid">
          {assets.map((m) => (
            <div
              key={m.id}
              className="gn-media-item"
              onClick={() => {
                onSelectImage(m.url);
                onClose();
              }}
            >
              <img src={m.url} alt={m.name} />
              <div className="gn-media-overlay">
                <span>{m.name}</span>
                <Check size={18} />
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .gn-media-card {
            background-color: var(--bg-surface);
            border-radius: var(--card-radius);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-modal);
            width: 100%;
            max-width: 680px;
            padding: 24px;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
          }

          .gn-media-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }

          .gn-media-add-form {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
          }

          .gn-media-add-form input {
            flex: 1;
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            background-color: var(--bg-main);
            color: var(--text-primary);
            font-size: 13px;
          }

          .gn-add-media-btn {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 16px;
            border-radius: 8px;
            background-color: var(--accent-color);
            color: white;
            font-size: 13px;
            font-weight: 600;
          }

          .gn-media-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 12px;
            overflow-y: auto;
            padding-right: 4px;
          }

          .gn-media-item {
            position: relative;
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.15s;
          }

          .gn-media-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .gn-media-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.15s;
            padding: 4px;
            text-align: center;
            font-size: 11px;
          }

          .gn-media-item:hover .gn-media-overlay {
            opacity: 1;
          }
        `}</style>
      </div>
    </div>
  );
};
