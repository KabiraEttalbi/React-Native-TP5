import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const articles = [
  { id: '1', title: 'Article N°: 1', content: 'Contenu de l\'article 1 : ................' },
  { id: '2', title: 'Article N°: 2', content: 'Contenu de l\'article 2 : ................' },
  { id: '3', title: 'Article N°: 3', content: 'Contenu de l\'article 3 : ................' },
  { id: '4', title: 'Article N°: 4', content: 'Contenu de l\'article 4 : ................' },
];

function ArticlesListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ArticleDetailsScreen', {article: item})}
    >
      <View style={{padding:16, borderBottomWidth:1, borderBottomColor:'#ccc', flexDirection:'row'}}>
        <Image style={{width:30, height:30, marginRight:10}} source={require('../assets/logo.jpeg')}/>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
  return (
   <FlatList
    data={articles}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
   />
  )
}

export default ArticlesListScreen;