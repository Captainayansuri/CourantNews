import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profileError, setProfileError] = useState('');

  const loadProfile = useCallback(async (userId) => {
    if (!userId) {
      setProfile(null);
      setProfileError('');
      return null;
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('id, email, role')
      .eq('id', userId)
      .maybeSingle();

    if (error || !data) {
      setProfile(null);
      setProfileError('Your account profile is unavailable. Ask an administrator to assign a role.');
      return null;
    }

    setProfile(data);
    setProfileError('');
    return data;
  }, []);

  useEffect(() => {
    let isMounted = true;

    const initialize = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      setSession(data.session);
      await loadProfile(data.session?.user?.id);
      if (isMounted) setIsLoading(false);
    };

    initialize();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setIsLoading(true);
      loadProfile(nextSession?.user?.id).finally(() => setIsLoading(false));
    });

    return () => {
      isMounted = false;
      subscription.subscription.unsubscribe();
    };
  }, [loadProfile]);

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { data: null, error };
    const nextProfile = await loadProfile(data.user?.id);
    return { data, profile: nextProfile, error: null };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setSession(null);
      setProfile(null);
      setProfileError('');
    }
  };

  const isStaff = profile?.role === 'admin' || profile?.role === 'editor';

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        profile,
        isLoading,
        profileError,
        isAuthenticated: Boolean(session?.user),
        isStaff,
        signIn,
        signOut,
        refreshProfile: () => loadProfile(session?.user?.id),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
