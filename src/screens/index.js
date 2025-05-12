import * as React from 'react'
import AllMovieScreen from '../screens/AllMovieScreen/AllSellMovieScreen';
import CitySelectScreen from './CitySelectScreen/index';

// 路由声明
export const stacks = [
    {
        name:'AllMovieScreen',
        component:AllMovieScreen,
        options:{headerShown:false},
    },
    {
        name:'CitySelectScreen',
        component:CitySelectScreen,
        options:{title:'城市选择'}
    }
];
