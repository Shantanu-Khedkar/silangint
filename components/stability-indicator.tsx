import { Text, View, StyleSheet, Button, TouchableOpacity, Touchable } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function indicatorV() {
  return (
    <View style={styles.container}>
        <View style={styles.indicator}><Text style={{color: "#f1f1f1", fontWeight: 600}}>A</Text></View>
    </View>
  )
    
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)', 
    backgroundColor: '#f1f1f1',
    padding:10,
    height: 60
    },
    indicator:{
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#1f1f1f',
        width: '0%',
        minWidth: 35,
        textAlignVertical: 'center',
        textAlign: 'left',
        padding:10
    }
  });
  
  