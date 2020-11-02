import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImagePropTypes,
} from "react-native";

function GoalItem(props) {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goal}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goal: {
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ddd",
    padding: 10,
  },
});

export default GoalItem;
