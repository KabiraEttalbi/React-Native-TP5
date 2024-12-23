import { NavigationContainer } from "@react-navigation/native";
import ArticlesListScreen from './screens/ArticlesListScreen';
import ArticleDetailsScreen from './screens/ArticleDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="ArticlesListScreen" screenOptions={{statusBarColor:'#f3b758', headerTintColor:'#c27107', headerTitleAlign:'center'}}>
        <Stack.Screen name="ArticlesListScreen" component={ArticlesListScreen}/>
        <Stack.Screen name="ArticleDetailsScreen" component={ArticleDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





