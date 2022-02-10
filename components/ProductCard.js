import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get("screen");
const widthlogo = width * 0.8;
const heightlogo = width * 0.42;

const PhotoContainer = () => (
  <View style={styles.FabricPhotosContainer}>
    <Image
      source={{
        uri: "https://picsum.photos/700",
      }}
      style={{
        height: "100%",
        flex:1
      }}
      resizeMode="cover"
    />
  </View>
);

const ProductCard = ({title,description}) => {
  return (
    <View style={styles.CategoryCardLeft}>
      <PhotoContainer />
      <View style={styles.TextContainer}>
        <Text style={{ marginTop: 5, fontWeight: "bold", fontSize:13}}>JOINT CARE</Text>
        <Text style={{ fontSize: 12, marginTop: 3 }}>
        If you’ve ever wondered how to best use horizontal spaces on mobile applications, you should consider using carousels.
        </Text>
        <Text style={{fontWeight: "bold", fontSize:15, color:'#146588',marginTop:10 }}>Rs 240
        </Text>
        <View style={{borderWidth:1,marginTop:5,marginBottom:10,opacity:0.5,borderColor:'#00A3A3'}}/>
        <View style={styles.AddToCartContainer}>
            <Text style={{fontWeight: "bold", fontSize:15, color:'#146588'}}>
                ADD TO CART
            </Text>
            <FontAwesome5 name="share-alt" size={20} color="#146588"/>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  CategoryCardLeft: {
    height: heightlogo,
    width: widthlogo,
    backgroundColor: "white",
    marginTop: 35,
    flexDirection: "row",
    elevation: 15,
    flex:1
  },
  FabricPhotosContainer: {
    height: "100%",
    width: 100,
  },
  TextContainer: {
    flexDirection: "column",
    flex: 1,
    margin: 10,
    marginLeft:15,
  },
  AddToCartContainer: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginRight:5,
      alignItems:'center'
  }
});
