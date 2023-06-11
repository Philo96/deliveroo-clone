import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from "taiwindcss-react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>This app is Basically made  by Philopatear Abdelmaseh</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b72f2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
