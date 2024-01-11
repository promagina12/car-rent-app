import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Portal } from "@gorhom/portal";
import CardFooter from "./components/CardFooter";

import Gas from "./assets/gas.svg";
import Meter from "./assets/speedMeter.svg";
import AC from "./assets/ac.svg";
import Back from "./assets/chevronLeft.svg";
import Settings from "./assets/settings.svg";
import { StatusBar } from "expo-status-bar";
import Close from "./assets/circle.svg";
import Car from "./assets/carWhite.svg";

const DATA = [
  {
    title: "Diesel",
    img: <Gas />,
    desc: "Common Rail Fuel Injection",
  },
  {
    title: "Acceleration",
    img: <Meter />,
    desc: "0 - 100km / 11s",
  },
  {
    title: "Cool Seat",
    img: <AC />,
    desc: "Temp Control on seat",
  },
];

const Details = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.featuresView}>
          {item.img}
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <View style={styles.backContainer}>
          <Back />
          <Settings />
        </View>
        <View style={styles.carBrand}>
          <Text style={styles.fortuner}>Fortuner GR</Text>
          <Text style={styles.km}>{"<"} 3km</Text>
        </View>
      </View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />

      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={styles.modalContainer}
        >
          <View style={styles.contentContainer}>
            <View style={styles.brand}>
              <CardFooter title="Fortuner GR" km="870" none />
              <Close />
            </View>
            <View style={styles.featuresContainer}>
              <Text style={styles.features}>Features</Text>
              <View style={styles.car}>
                <Car />
              </View>
              <FlatList
                style={styles.flatlistView}
                data={DATA}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
              <View style={styles.footerContainer}>
                <Text style={styles.price}>
                  $<Text style={styles.number}>45</Text>,00
                  <Text style={styles.day}>/day</Text>
                </Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Book Now</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </BottomSheet>
      </Portal>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  headerContainer: {
    position: "absolute",
    zIndex: 9999,
    paddingTop: 40,
    width: "100%",
    paddingHorizontal: 22,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  backContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  carBrand: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
  },

  fortuner: {
    fontSize: 16,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#232323",
  },

  km: {
    fontSize: 12,
    fontFamily: "OpenSans_400Regular",
    fontWeight: "400",
    color: "#B0B0B0",
  },

  modalContainer: {
    backgroundColor: "#282931",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    height: "100%",
  },

  brand: {
    paddingLeft: 28,
    paddingRight: 23,
    paddingBottom: 17,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  featuresContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 28,
    paddingTop: 22,
    position: "relative",
  },

  features: {
    fontSize: 20,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#292D32",
    marginBottom: 14,
  },

  featuresView: {
    borderWidth: 1,
    paddingTop: 15,
    paddingLeft: 16,
    paddingBottom: 12,
    width: 136,
    marginRight: 14,
    borderRadius: 16,
    borderColor: "#E8E8E8",
    height: 89,
  },

  title: {
    fontSize: 14,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#292D32",
    marginTop: 7,
  },

  desc: {
    fontSize: 8,
    fontFamily: "OpenSans_400Regular",
    fontWeight: "400",
    color: "#898A8D",
  },

  contentContainer: {
    flex: 1,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    paddingTop: 39,
    paddingBottom: 100,
  },

  button: {
    backgroundColor: "#000000",
    paddingVertical: 17.5,
    paddingHorizontal: 38,
    borderRadius: 50,
  },

  buttonText: {
    fontSize: 14,
    fontFamily: "Barlow_600SemiBold",
    fontWeight: "600",
    color: "#FFFFFF",
  },

  price: {
    fontSize: 33.71,
    fontFamily: "Barlow_400Regular",
    fontWeight: "400",
    color: "#292D32",
  },

  number: {
    fontSize: 33.71,
    fontFamily: "Barlow_700Bold",
    fontWeight: "700",
    color: "#292D32",
  },

  day: {
    fontSize: 14.98,
    fontFamily: "Barlow_400Regular",
    fontWeight: "400",
    color: "#292D32",
  },

  car: {
    position: "absolute",
    right: 30,
    top: -60
  },
});
