import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    /* bind allows a person to preconfigure a function */
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
              onPress={props.onDeleteItem.bind(this, props.id)}
              style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5, 
    },
  goalText: { color: "white", padding: 8 },
});
