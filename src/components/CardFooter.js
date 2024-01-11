import { StyleSheet, Text, View } from "react-native";
import React from "react";

import GpsW from "../assets/gpsWhite.svg";
import GpsG from "../assets/gpsGray.svg";
import GasW from "../assets/gasWhite.svg";
import GasG from "../assets/gasGray.svg";
import Battery from "../assets/battery.svg";
import Right from "../assets/chevronRight.svg";

const CardFooter = ({ more, none, gray, bat, title, km, divider }) => {
  return (
    <>
      <View
        style={{
          flexDirection: more && "row",
          alignItems: more && "center",
          justifyContent: more && "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Barlow_600SemiBold",
              fontWeight: "600",
              color: gray ? "#2C2B34" : "#FFFFFF",
              letterSpacing: -1.2,
            }}
          >
            {title}
          </Text>
          <View style={styles.cardFooter}>
            <View style={styles.gpsGasContainer}>
              <View style={styles.gpsContainer}>
                {gray ? <GpsG /> : <GpsW />}
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: gray
                      ? "Barlow_400Regular"
                      : "OpenSans_400Regular",
                    fontWeight: "400",
                    color: gray ? "#787878" : "#D8D8D8",
                    marginRight: 17,
                    marginLeft: 2,
                  }}
                >
                  {">"} {km}km
                </Text>
              </View>
              <View style={styles.gasContainer}>
                {bat ? (
                  <View style={styles.gasContainer}>
                    <Battery />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: gray
                          ? "Barlow_400Regular"
                          : "OpenSans_400Regular",
                        fontWeight: "400",
                        color: gray ? "#787878" : "#D8D8D8",
                        marginLeft: 6,
                      }}
                    >
                      80%
                    </Text>
                  </View>
                ) : (
                  <>
                    {gray ? <GasG /> : <GasW />}
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: gray
                          ? "Barlow_400Regular"
                          : "OpenSans_400Regular",
                        fontWeight: "400",
                        color: gray ? "#787878" : "#D8D8D8",
                        marginLeft: 6,
                      }}
                    >
                      50L
                    </Text>
                  </>
                )}
              </View>
            </View>
            {none ? <></> : <Text style={styles.price}>$ 45,00/h</Text>}
          </View>
        </View>
        {more && (
          <View style={styles.chevRight}>
            <Right />
          </View>
        )}
      </View>
      {divider && <View style={styles.divider} />}
    </>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },

  gpsGasContainer: {
    flexDirection: "row",
  },

  gpsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  gasContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  chevRight: {
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 37
  },

  divider: {
    borderWidth: 0.5,
    borderColor: "#4B4B4B",
    marginVertical: 18,
  },
});
