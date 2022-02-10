import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const { width } = Dimensions.get('screen');
const widthlogo = width * 0.25;

const FeaturesButton = ({name, text}) => {
  return (
    <View>
            <LinearGradient
        // Button Linear Gradient
        colors={['#2D6974', '#68B39F']}
        style={styles.appButtonContainer}>
      <FontAwesome5 name={name} size={26} color="white"/>
      <Text style={{fontSize: 13, marginTop:10, color: 'white'}}>{text}</Text>
      </LinearGradient>
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
