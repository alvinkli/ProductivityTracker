import React, { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Modal,
  View,
} from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.handleAdd(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={addGoalHandler} />
          <Button title="CANCEL" onPress={props.handleCancel} color="red" />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 10,
  },
});
export default GoalInput;
