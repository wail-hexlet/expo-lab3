import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
       <Text style={styles.textContainer}>Hi! My name is Anatoliy Tupitsin</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    color: '#fff',
    marginHorizontal: "auto",    
  },
});
