import * as React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { TabView,TabBar,SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { cinema } from '../../../../assets/images/guide';

const initialLayout = {width:Dimensions.get('window').width};
const {fullWidth} = Dimensions.get('window');
const HeaderPaddingTop =
  Platform.OS === 'ios' ? (width >= 375 ? 50 : tools.isIPhoneX() ? 40 : 10) : 0;

function HomeTabView(props){
    const [FirstRoute,SecondRoute] = props;
    const [index,setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key:'movie',title:'影片'},
        {key:'cinema',tite:'影院'},
    ]);
    const renderScene = SceneMap({
        movie:FirstRoute,
        cinema:SecondRoute,
    });

    const _renderTabBar = props =>{
        const {position} = props;
        const len = props?.navigationState?.routes?.length;
        const NAVWIDTH = fullWidth/3;
        const itemWidth = NAVWIDTH/len;
        const inputRange = props?.navigationState?.routes?.map((x,i)=>i);
        const left = Animated.interpolate(position,{
            inputRange,
            outputRange:inputRange.map(inputIndex=>inputIndex*itemWidth),
        });
        return (
            <View style={styles.container}>
                <View style={{width:NAVWIDTH,height:44,alignSelf:'center'}}>
                    <TabBar
                    {...props}
                    style={{
                        backgroundColor:'#ffffff',
                        shadowColor:'#ffffff',
                        height:44,
                    }}
                    getLabelText ={({route})=>route.title}
                    labelStyle={{fontSize:16,}}
                    tabStyle={{
                        height:44,
                        width:itemWidth,
                    }}
                    indicatorStyle = {{backgroundColor:'#FC5869'}}
                    activeColor={'#FC5869'}
                    inactiveColor={'#777'}
                    />
                </View>
            </View>
        );
    };

    return (
        <TabView
        navigationState={{index,routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={props=>_renderTabBar(props)}
        />
    );
}

const styles = StyleSheet.create({
    container:{
        fullWidth,
        paddingTop:HeaderPaddingTop,
        backgroundColor:'#fff',
    },
    nav:{
        fullWidth,
        height:44,
        flexDirection:'row',
    },
    address:{
        position:'absolute',
        left:5,
        alignSelf:'center',
    },
    tabCon:{
        flexDirection:'row',
        justifyContent:'center',
        flex:1,
    },
    tabItem:{
        justifyContent:'center',
        alignItems:'center',
    },
    itemTxt:{
        fontSize:16,
        fontWeight:'700',
    },
    itemAnim:{
        position:'absolute',
        bottom:0,
        alignItems:'center',
    },
    itemInd:{
        width:20,
        height:2,
        backgroundColor:'#FC5869',
        borderRadius:2,
    },
});

export default HomeTabView;