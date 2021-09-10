// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 指向当前的组件、类似于reactRoute
function HomeScreen(state) {
  const { navigation } = state

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title='点击我跳转详情'
        onPress={() => navigation.navigate('Details')}    
      />
    </View>
  );
}

/**
 * navigate: 如果跳转屏幕的时候 你已经在当前屏幕、那么就什么也不要做；
 * push: 类似于react route的push、这个很好理解
 * popToTop: 返回到堆栈中的第一个屏幕。
 */

function DetailsScreen( state ){
  const { navigation } = state
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to navigate Details" 
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to push Details" 
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go popToTop" onPress={() => navigation.popToTop()} />
    </View>
  );
}
// 创建一个路由的对象
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title:"我是首页"}} component={HomeScreen} />
        <Stack.Screen name="Details" options={{ title:"我是详情"}}  component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;