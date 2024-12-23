import React from 'react'
import { Text, View } from 'react-native'

function ArticleDetailsScreen({ route }) {
  const { article } = route.params;
  return (
    <View style={{padding:16}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>{article.title}</Text>
      <Text style={{marginTop:8}}>{article.content}</Text>
    </View>
  )
}

export default ArticleDetailsScreen;