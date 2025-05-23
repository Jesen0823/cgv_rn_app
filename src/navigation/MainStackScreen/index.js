import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { stacks } from '../../screens';
import BottomTab from '../BottomTab';

const MainStack = createStackNavigator();

export default function MainStackScreen({navigation}) {
    return (
        <MainStack.Navigator
          initialRouteName='App'
          screenOptions={{
            headerTitleAlign:'center',
            headerStyle:{
                shadowOffset:{width:0,height:0},
                shadowColor:'#E5E5E5',
                backgroundColor:'#fff',
            },
            gestureEnabled:true,
            headerBackTitleVisiblle:false,
            headerLeft:()=>(
                <TouchableOpacity 
                  onPress={()=>navigation.goBack()}
                  style={{padding:10,paddingRight:30}}>
                        <Icon name="chevron-thin-left" size={20} color="#222222"/>
                  </TouchableOpacity>
            ),
          }}>
        <MainStack.Screen
            name='App'
            component={BottomTab}
            options={{headerShown:false}}
        />
        {
            stacks.map((item,index)=>(
                <MainStack.Screen
                    key={index.toString()}
                    name={item.name}
                    component={item.component}
                    options={item.options}
                />
            ))
        }
        </MainStack.Navigator>
    );
}