import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import MapView from "react-native-maps";
import React from "react";

import Info from "./assets/info.svg";
import Bell from "./assets/bell.svg";
import CarB from "./assets/carBlack.svg";
import More from "./assets/more.svg";
import CardFooter from "./components/CardFooter";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <View style={styles.infoContainer}>
          <Info />
          <Text style={styles.information}>information</Text>
        </View>
        <View style={styles.notifContainer}>
          <Bell />
          <Text style={styles.notification}>Notifications</Text>
        </View>
      </View>
      <Pressable
        style={styles.carCard}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.nearest}>NEAREST CAR</Text>
        <CarB />
        <CardFooter gray title="Fortuner GR" km="870" />
      </Pressable>
      <View style={styles.midContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/img/Profile.png")}
            style={styles.profile}
          />
          <Text style={styles.name}>Jane Cooper</Text>
          <Text style={styles.balance}>$ 4,253</Text>
        </View>
        <View style={styles.mapHolder}>
          <MapView liteMode style={styles.map} />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.moreCarsContainer}>
          <Text style={styles.moreCars}>More Cars</Text>
          <More />
        </View>
        <CardFooter title="Corolla Cross" km="4" more none divider />
        <CardFooter bat title="Ionic 5" km="8" more none />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },

  mapHolder: {
    height: 170,
    width: 151,
    borderRadius: 20,
    overflow: "hidden",
  },

  map: {
    borderRadius: 20,
    height: 170,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
  },

  infoContainer: {
    flexDirection: "row",
  },

  notifContainer: {
    flexDirection: "row",
  },

  information: {
    fontSize: 16,
    fontFamily: "Barlow_600SemiBold",
    fontWeight: "600",
    color: "#000000",
    marginLeft: 10,
  },

  notification: {
    fontSize: 16,
    fontFamily: "Barlow_600SemiBold",
    fontWeight: "600",
    color: "#000000",
    marginLeft: 10,
  },

  carCard: {
    marginTop: 20,
    backgroundColor: "#F3F3F3",
    paddingLeft: 21,
    paddingRight: 31,
    paddingVertical: 16,
    borderRadius: 20,
  },

  nearest: {
    fontSize: 12,
    fontFamily: "Barlow_400Regular",
    fontWeight: "400",
    color: "#787878",
    letterSpacing: 2,
    paddingBottom: 9,
  },

  midContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  profileContainer: {
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    paddingHorizontal: 32,
    borderRadius: 20,
  },

  profile: {
    marginTop: 27,
  },

  name: {
    fontSize: 16,
    fontFamily: "Barlow_500Medium",
    fontWeight: "500",
    color: "#000000",
    marginTop: 14,
  },

  balance: {
    fontSize: 14,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#000000",
  },

  footerContainer: {
    marginTop: 22,
    backgroundColor: "#282931",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingTop: 21,
    paddingBottom: 23,
  },

  moreCarsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  moreCars: {
    fontSize: 12,
    fontFamily: "OpenSans_400Regular",
    fontWeight: "400",
    color: "#D4D4D4",
  },
});
