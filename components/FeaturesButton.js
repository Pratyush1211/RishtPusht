import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
const { width } = Dimensions.get('screen');
const widthlogo = width * 0.25;

const FeaturesButton = ({name, text}) => {
  return (
    <View style={styles.appButtonContainer}>
      <FontAwesome5 name={name} size={26} color="white"/>
      <Text style={{fontSize: 13, marginTop:10, color: 'white'}}>{text}</Text>
    </View>
  );
};

export default FeaturesButton;

const styles = StyleSheet.create({
    appButtonContainer: {
        height: widthlogo,
        width: widthlogo,
        backgroundColor: '#00A3A3',
        borderRadius: 22,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        elevation: 8
    },
});
