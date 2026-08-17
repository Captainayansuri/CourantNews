import React, { useEffect, useRef, useState } from 'react';
import { X, Plus, Image as ImageIcon, Check } from 'lucide-react';
import { newsService } from '../../services/newsService';

export const MediaLibraryModal = ({ onSelectImage, onClose }) => {
  const [assets, setAssets] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');
  const [isLoadingAssets, setIsLoadingAssets] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    let active = true;
    newsService.getMediaAssets()
      .then((mediaAssets) => {
        if (active) setAssets(mediaAssets);
      })
      .catch(() => {
        if (active) setError('Unable to load the media library.');
      })
      .finally(() => {
        if (active) setIsLoadingAssets(false);
      });
    return () => { active = false; };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setSelectedFile(null);
      setError('Choose a valid image file.');
      event.target.value = '';
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setSelectedFile(null);
      setError('Image files must be 10 MB or smaller.');
      event.target.value = '';
      return;
    }

    setSelectedFile(file);
    setError('');
  };

  const handleAddMedia = async (e) => {
    e.preventDefault();
    if (!selectedFile || isUploading) return;

    setIsUploading(true);
    setError('');
    try {
      const created = await newsService.uploadMediaAsset({
        file: selectedFile,
        name: newName,
        category: 'general',
      });
      setAssets((current) => [created, ...current]);
      setSelectedFile(null);
      setNewName('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (uploadError) {
      setError(uploadError.message || 'Unable to upload this image.');
    } finally {
      setIsUploading(false);
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
            ref={fileInputRef}
            type="file"
            accept="image/*"
            required
            onChange={handleFileChange}
            disabled={isUploading}
          />
          <input
            type="text"
            placeholder="Image name (optional)"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            disabled={isUploading}
          />
          <button type="submit" className="gn-add-media-btn" disabled={!selectedFile || isUploading}>
            <Plus size={16} /> {isUploading ? 'Uploading...' : 'Upload image'}
          </button>
        </form>

        {selectedFile && <div className="gn-media-file-name">Selected: {selectedFile.name}</div>}

        {error && <div className="gn-login-error">{error}</div>}

        <div className="gn-media-grid">
          {isLoadingAssets && <div className="gn-media-loading">Loading media…</div>}
          {!isLoadingAssets && assets.map((m) => (
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

          .gn-add-media-btn:disabled {
            cursor: not-allowed;
            opacity: 0.65;
          }

          .gn-media-file-name {
            margin: -8px 0 12px;
            font-size: 12px;
            color: var(--text-secondary);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .gn-media-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 12px;
            overflow-y: auto;
            padding-right: 4px;
          }

          .gn-media-loading {
            color: var(--text-secondary);
            font-size: 13px;
            padding: 12px 0;
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
