import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");
const widthlogo = width * 0.8;
const heightlogo = width * 0.3;

const PhotoContainer = () => (
  <View style={styles.FabricPhotosContainer}>
    <Image
      source={{
        uri: "https://picsum.photos/700",
      }}
      style={{
        height: 100,
        width: 100,
        borderRadius: 200,
      }}
      resizeMode="contain"
    />
  </View>
);

const CategoryContainerRight = ({ title, description }) => {
  return (
    <View style={styles.CategoryCardRight}>
      <View style={styles.TextContainer}>
        <Text style={{ marginTop: 5, fontWeight: "bold", fontSize: 13 }}>
          JOINT CARE
        </Text>
        <Text style={{ fontSize: 12, marginTop: 3 }}>
          If you’ve ever wondered how to best use horizontal spaces on mobile
          applications
        </Text>
        <View style={styles.ExploreContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#146588" }}>
            EXPLORE >
          </Text>
        </View>
      </View>
      <PhotoContainer />
    </View>
  );
};

export default CategoryContainerRight;

const styles = StyleSheet.create({
  CategoryCardRight: {
    height: heightlogo,
    width: widthlogo,
    backgroundColor: "white",
    marginTop: 35,
    borderTopRightRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: "center",
    flexDirection: "row",
    elevation: 15,
    shadowRadius: 2,
  },
  FabricPhotosContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 15,
  },
  TextContainer: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 10,
  },
  ExploreContainer: {
    alignContent: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10,
    marginRight: 5,
  },
});
