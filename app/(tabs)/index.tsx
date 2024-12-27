import { Text, View, StyleSheet, Button, TouchableOpacity, TextInput, TextBase, TouchableWithoutFeedback, Keyboard, Pressable, Platform, SafeAreaView } from 'react-native';
import { Link } from 'expo-router'; 
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import CameraViewer from "@/components/camera-view";
import StabilityIndicator from "@/components/stability-indicator";

function dismissKeyboard() { if (Platform.OS != "web"){ Keyboard.dismiss(); } }

export default function Index() {
   return (
    <Pressable style={{ flex: 1 }} onPress={dismissKeyboard}>
      <SafeAreaView style={{height: 400}}>
    <View style={styles.cameraContainer}>
    <CameraViewer ></CameraViewer>
    </View>
    </SafeAreaView>
    <View style={styles.interfaceContainer}>
    <StabilityIndicator></StabilityIndicator>
    
        <View style={{flexDirection: 'column', gap: 10, justifyContent: "flex-end", marginTop: 10, flexGrow:1}}>
        <TextInput
          editable
          multiline
          onChangeText={text => onChangeText(text)}
          style={styles.textBox}
        />
      <TouchableOpacity style={styles.speakTextBtn}>
              <Text style={{fontSize:20, color:'rgb(44, 44, 44)', fontWeight: 530}}>Speak Text</Text>
              <Ionicons name='volume-high' color='rgb(44, 44, 44)' size={25} />
          </TouchableOpacity>
          </View>
    </View>
    
</Pressable>
   );
}

function onChangeText(text){
  console.log(text)
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
  interfaceContainer: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    justifyContent : 'space-between',
    /*overflow: 'hidden',
    /*boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)',   */
    backgroundColor: '#f1f1f1',
    margin:20,
    marginTop: 0,
    padding:0,

  },
  textBox: {
    borderRadius: 10,
    overflow: 'scroll',
    boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)',  
    padding: 10,
    textAlign: 'center',
   flexGrow: 1
  },
  speakTextBtn:{
    borderRadius: 10,
    overflow: 'scroll',
    boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)',  
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height:60,
  }
});

