import { FlatList, StyleSheet, View } from "react-native";
import GoalItemEntry from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import React, { useState } from "react";

type GoalItem = {
  text: string;
  key: string;
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalItem[]>([]);

  function addGoalHandler(enteredGoal: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItemEntry text={itemData.item.text} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
