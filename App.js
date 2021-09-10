import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * 1、参数作为函数对象的第二个参数传递过去、navigation.navigate('RouteName', {  params go here  })
 * 2、setParams 更新参数对象
 * 3、initialParams 初始化参数
 */

function HomeScreen(state) {
  const { navigation,route } = state

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>默认参数：{JSON.stringify(route.params.id)}</Text>
      <Text>详情传递的参数：{JSON.stringify(route)}</Text>
      <Button 
        title='点击我跳转详情'
        onPress={() => 
          navigation.navigate('Details')
        }    
      />
      <Button 
        title='更新参数'
        onPress={() => 
          navigation.setParams({
            otherParam:"我更新一下"
          })
        }    
      />
    </View>
  );
}

function DetailsScreen( state ){
  const { navigation, route } = state
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>首页传递的参数：{JSON.stringify(route)}</Text>
      <Button 
        title='点击我跳转首页'
        onPress={() => 
            navigation.navigate('Home', {
            otherParam: '我是首页',
          })
        }    
      />
    </View>
  );
}
// 创建一个路由的对象
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" initialParams={{ id: 999}}  options={{ title:"我是首页"}} component={HomeScreen} />
        <Stack.Screen name="Details" options={{ title:"我是详情"}}  component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;