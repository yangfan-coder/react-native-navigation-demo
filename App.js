import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LogoTitle(props) { 
  return(
    <>
      <Text style={{ color:'#fff'}}>{props.children}</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        />
    </>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: '自定义头部' })
        }
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="点击我更新头部"
        onPress={() => navigation.setOptions({ title: '更新头部' })}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            headerTitle: props => <LogoTitle {...props} /> ,
            title: '首页',
            headerStyle:{
              backgroundColor:'red',
              
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:"blod"
            }
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
