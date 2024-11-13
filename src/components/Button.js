import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import theme from '../components/theme';

const Button = ({ 
  variant = 'primary',
  size = 'md',
  onPress, 
  children, 
  disabled,
  loading,
  leftIcon,
  rightIcon,
  style,
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary[500],
          borderColor: theme.colors.primary[500],
        };
      case 'secondary':
        return {
          backgroundColor: theme.colors.gray[100],
          borderColor: theme.colors.gray[200],
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: theme.colors.primary[500],
        };
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'sm':
        return {
          paddingVertical: theme.spacing.xs,
          paddingHorizontal: theme.spacing.sm,
          ...theme.typography.bodySmall,
        };
      case 'lg':
        return {
          paddingVertical: theme.spacing.md,
          paddingHorizontal: theme.spacing.lg,
          ...theme.typography.h3,
        };
      default:
        return {
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.md,
          ...theme.typography.body,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : theme.colors.primary[500]} />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={[
            styles.text,
            variant === 'primary' && styles.textLight,
            variant === 'outline' && styles.textPrimary,
          ]}>
            {children}
          </Text>
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    textAlign: 'center',
    color: theme.colors.gray[800],
  },
  textLight: {
    color: theme.colors.white,
  },
  textPrimary: {
    color: theme.colors.primary[500],
  },
  leftIcon: {
    marginRight: theme.spacing.xs,
  },
  rightIcon: {
    marginLeft: theme.spacing.xs,
  },
});

export default Button;