export const lightTheme = {
  color: {
    background: '#f6f6f6',
    surface: '#ffffff',
    text: '#2b2b2b',
    mutedText: '#6e6e6e',
    primary: '#2F76FF',
    accent: '#12B886',
    border: '#e7e7e7',
    positive: '#16a34a',
    warning: '#f59e0b',
    danger: '#ef4444',
  },
  layout: {
    sidebarWidth: 240,
    headerHeight: 56,
    contentMaxWidth: 1360,
    radius: 8,
    gutter: 6,
  },
} as const

export type AppTheme = typeof lightTheme


