import { Text, View, StyleSheet, Button, TouchableOpacity, Touchable } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function camV() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
          <TouchableOpacity style={styles.enableWebcam} onPress={requestPermission}>
              <Text style={{fontSize:20, color:'rgb(44, 44, 44)', fontWeight: 530}}> Enable Webcam</Text>
              <Ionicons name='camera' color='rgb(44, 44, 44)' size={25} />
          </TouchableOpacity>
          </View>
        );
      }
    
      function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
      }
    
      return (
        <View style={styles.container}>
          <CameraView style={styles.camera} facing={facing}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <View style={{backgroundColor: 'white', padding: 5, borderRadius: 10, boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)',}}>
              <Ionicons name='camera-reverse' color='rgb(44, 44, 44)' size={38} />
              </View>
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>
      );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)',   

    },
    enableWebcam: {
      flexDirection: 'row',
      margin: 20,
      flexGrow: 0,
      gap: 10,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2;',
      borderRadius: 10,
      boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.38)',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor:'transparent',
      margin: 10,
    },
    button: {
      flex: 1,
      flexGrow: 1,
      flexDirection:'row',
      alignSelf: 'flex-end',
      backgroundColor: 'transparent',
      
    },
  });
  
  