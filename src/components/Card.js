import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import theme from "./theme";

// components/Card.js
const Card = ({ children, style, onPress }) => {
  const Wrapper = onPress ? TouchableOpacity : View;
  
  return (
    <Wrapper
      style={[styles.card, style]}
      onPress={onPress}
    >
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    ...theme.shadows.md,
  },
});

export default Card;