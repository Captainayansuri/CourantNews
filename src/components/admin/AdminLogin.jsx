import React, { useState } from 'react';
import { Lock, X, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const AdminLogin = ({ onClose }) => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await signIn(email, password);
      if (res.error) {
        setError(res.error.message);
      } else if (res.profile?.role === 'admin' || res.profile?.role === 'editor') {
        navigate('/admin', { replace: true });
      } else {
        setError('This account is authenticated but is not assigned an editor or administrator role.');
      }
    } catch (loginError) {
      setError(loginError?.message || 'Unable to sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="gn-modal-overlay">
      <div className="gn-login-card animate-fade-in">
        <div className="gn-login-header">
          <div className="gn-login-badge">
            <Lock size={20} />
          </div>
          <h3>Editorial Admin Login</h3>
          <p>Sign in to manage news coverage and site publications.</p>

          {onClose && (
            <button className="gn-close-modal-btn" onClick={onClose}>
              <X size={18} />
            </button>
          )}
        </div>

        {error && (
          <div className="gn-login-error">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="gn-login-form">
          <div className="gn-form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="editor@example.com"
              autoComplete="email"
            />
          </div>

          <div className="gn-form-group">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="gn-login-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign in to administration'}
          </button>
        </form>

        <style>{`
          .gn-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1200;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          }

          .gn-login-card {
            background-color: var(--bg-surface);
            border-radius: var(--card-radius);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-modal);
            width: 100%;
            max-width: 400px;
            padding: 28px;
            position: relative;
          }

          .gn-login-header {
            text-align: center;
            margin-bottom: 20px;
          }

          .gn-login-badge {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: var(--accent-light);
            color: var(--accent-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px auto;
          }

          .gn-login-header h3 {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-primary);
          }

          .gn-login-header p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
          }

          .gn-close-modal-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            color: var(--text-muted);
            padding: 4px;
          }

          .gn-login-error {
            background-color: var(--danger-bg);
            color: var(--danger-text);
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
          }

          .gn-form-group {
            margin-bottom: 16px;
            text-align: left;
          }

          .gn-form-group label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 6px;
          }

          .gn-form-group input {
            width: 100%;
            padding: 10px 14px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            background-color: var(--bg-main);
            color: var(--text-primary);
            font-size: 14px;
            outline: none;
          }

          .gn-form-group input:focus {
            border-color: var(--accent-color);
            background-color: var(--bg-surface);
          }

          .gn-login-hint {
            font-size: 12px;
            color: var(--text-muted);
            margin-bottom: 20px;
            text-align: center;
          }

          .gn-login-hint code {
            background-color: var(--bg-hover);
            padding: 2px 6px;
            border-radius: 4px;
            color: var(--accent-color);
          }

          .gn-login-submit-btn {
            width: 100%;
            padding: 12px;
            border-radius: 24px;
            background-color: var(--accent-color);
            color: white;
            font-size: 14px;
            font-weight: 600;
            transition: background-color 0.15s;
          }

          .gn-login-submit-btn:hover {
            background-color: var(--accent-hover);
          }
        `}</style>
      </div>
    </div>
  );
};
