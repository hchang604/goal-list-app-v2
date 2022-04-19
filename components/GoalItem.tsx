import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export type GoalItem = {
  text: string;
  key: string;
};

type GoalItemProps = {
  goalItem: GoalItem;
  onDeleteItem: (key: string) => void;
};

function GoalItemEntry(props: GoalItemProps) {
  return (
    <Pressable onPress={() => props.onDeleteItem(props.goalItem.key)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.goalItem.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItemEntry;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
