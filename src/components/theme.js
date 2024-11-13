const theme = {
    colors: {
      primary: {
        50: '#F0EFFE',
        100: '#E4E1FD',
        200: '#CBC5FB',
        300: '#B1A8F9',
        400: '#978CF7',
        500: '#6540F5', // main brand color
        600: '#5434D9',
        700: '#4328BD',
        800: '#321CA1',
        900: '#211085',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      background: '#F9FAFB',
      white: '#FFFFFF',
    },
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48,
    },
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      full: 9999,
    },
    typography: {
      h1: {
        fontSize: 28,
        lineHeight: 34,
        fontWeight: '700',
      },
      h2: {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '600',
      },
      h3: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
      },
      body: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
      },
      bodySmall: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
      },
      caption: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
      },
    },
    shadows: {
      sm: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      },
      md: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      },
      lg: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
      },
    },
  };
  

export default theme;