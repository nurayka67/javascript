import React from 'react';
import { withTheme } from '../hocs/withTheme';

const ThemedButton = withTheme(({ theme, children, onClick }) => (
  <button onClick={onClick} style={{ background: theme.colors.primary, color: '#fff', padding: theme.spacing.sm, borderRadius: theme.borderRadius.md, border: 'none', cursor: 'pointer' }}>{children}</button>
));

const ThemedCard = withTheme(({ theme, children }) => (
  <div style={{ background: theme.colors.surface, padding: theme.spacing.lg, borderRadius: theme.borderRadius.md, border: `1px solid ${theme.colors.border}` }}>{children}</div>
));

const ThemeSwitcher = withTheme(({ theme, isDark, toggleTheme }) => (
  <button onClick={toggleTheme} style={{ padding: theme.spacing.sm, background: theme.colors.surface, border: `1px solid ${theme.colors.border}`, borderRadius: theme.borderRadius.md, cursor: 'pointer' }}>{isDark ? ' Light' : ' Dark'}</button>
));

export { ThemedButton, ThemedCard, ThemeSwitcher };