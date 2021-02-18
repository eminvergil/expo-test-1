import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
const { width, height } = Dimensions.get("screen");

import faker from "faker";

const BG_IMG = `https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`;

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      "women",
      "men",
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: BG_IMG }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}
      />
      <FlatList
        data={DATA}
        contentContainerStyle={{ padding: SPACING, marginVertical: SPACING }}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          return (
            <View
              elevation={10}
              style={{
                flexDirection: "row",
                padding: SPACING,
                marginBottom: SPACING,
                borderRadius: SPACING,
                // borderWidth: 1,
                backgroundOpacity: 0.2,
                backgroundColor: "#f3f3f3",
                shadowColor: "#000",
                shadowOffset: {
                  width: 1,
                  height: 20,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />

              <View>
                <Text style={{ fontSize: 22, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7 }}>
                  {item.jobTitle}
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.8, color: "#0099cc" }}>
                  {item.email}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
