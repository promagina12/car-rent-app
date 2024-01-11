import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImgBG from "./assets/onBoardingBG.svg";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.carBG}>
        <ImgBG />
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.title}>Premium cars. Enjoy the luxury</Text>
        <Text style={styles.desc}>
          Premium and prestige car daily rental. Experience the thrill at a
          lower price
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Let's Go</Text>
      </Pressable>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#2C2B34",
  },

  carBG: {
    position: "absolute",
    right: -175,
  },

  textHolder: {
    paddingTop: 500,
    paddingLeft: 29,
    paddingRight: 100,
  },

  title: {
    fontSize: 35.2,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#FFFFFF",
  },

  desc: {
    fontSize: 15,
    fontFamily: "Barlow_400Regular",
    fontWeight: "400",
    color: "#8E8E8E",
  },

  button: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingTop: 50,
  },

  buttonText: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 50,
    fontSize: 20,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#2C2B34",
  },
});
