import { FlatList, StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItemEntry, { GoalItem } from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import React, { useState } from "react";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalItem[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal: string) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(key: string) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#a065ec"
        />
        <GoalInput
          addHandler={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItemEntry
                  goalItem={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
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
