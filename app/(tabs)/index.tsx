import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; 
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import CameraViewer from "@/components/camera-view";
import SignInterface from "@/components/sign-interface-view";

export default function Index() {
   return (
    <>
    <View  style={styles.cameraContainer}>
    <CameraViewer ></CameraViewer>
    </View>
    <SignInterface></SignInterface>
    </>
   );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  cameraContainer: {
   padding: 20,
   flexGrow: 1,
  },
});

