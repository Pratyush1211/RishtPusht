import { StatusBar } from "expo-status-bar";
import { StyleSheet,Image, Text, View, Dimensions, ScrollView } from "react-native";
import FeaturesButton from "./components/FeaturesButton";
import CategoryContainerLeft from "./components/CategoryContainerLeft";
import CategoryContainerRight from "./components/CategoryContainerRight";
import ProductCard from "./components/ProductCard";
import Swiper from "react-native-swiper";
import { FontAwesome5 } from '@expo/vector-icons';


import { FeaturesData } from "./Data/FeaturesDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
        <View style={styles.HeaderBar}>
          <Text style={styles.HeadingText}>
            Rishth Pusht
          </Text>
        <FontAwesome5 name="list-ul" size={26} color="black"/>
        </View>
        <View style={styles.HeadingContainer}>
          <Text style={styles.HeadingText}>
            Hello there,{"\n"}how can we serve you today ...
          </Text>
        </View>
        <Swiper autoplay height={200} activeDotColor="white" style={{marginTop:0}}>
            <View style={styles.slide}>
              <Image
               source={{
                uri: "https://picsum.photos/700",
              }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://picsum.photos/700",
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: "https://picsum.photos/700",
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        <View style={styles.OptionContainer}>
          {FeaturesData.map((data) => (
            <FeaturesButton key={data.id} name={data.name} text={data.text} />
          ))}
        </View>
        <View style={styles.CategoryContainer}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#353C40" }}
            >
              Catgories
            </Text>
            <Text style={{ fontSize: 15, color: "darkblue" }}>VIEW ALL</Text>
          </View>
          <CategoryContainerLeft />
          <CategoryContainerRight />
          <CategoryContainerLeft />
          <CategoryContainerRight />
        </View>
        <View style={styles.FeaturesContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#353C40" }}>
            Features
          </Text>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
        <View style={styles.FeaturesContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#353C40" }}>
            Most Viewed Products
          </Text>
          <ProductCard />
          <ProductCard />
        </View>
        <View style={styles.FeaturesContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#353C40" }}>
            Our Media Associates
          </Text>
        </View>
        <View style={styles.OptionContainer}>
          {FeaturesData.map((data) => (
            <FeaturesButton key={data.id} name={data.name} text={data.text} />
          ))}
        </View>
        <StatusBar style="auto" />
        <View style={styles.footer}>
          <Text style={{fontSize:12,fontWeight:'bold'}}>
            @ ND care Neogram Pvt.ltd - All rights reserved
            </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HeaderBar: {
    marginTop: 50,
    justifyContent:'space-between',
    flexDirection:'row',
    marginRight:20,
    marginLeft: 20,
    
  },
  HeadingContainer: {
    margin: 40,
    marginBottom: 10,
    marginLeft: 40,
  },
  HeadingText: {
    fontSize: 22,
    fontWeight: "200",
    color: "#00A3A3",
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  slide: {
    flex: 1,
    marginTop:-10,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '90%',
    width: '85%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  OptionContainer: {
    padding: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  CategoryContainer: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  FeaturesContainer: {
    padding: 20,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom: 20
  }
});
