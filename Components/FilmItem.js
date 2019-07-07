// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (

      // ceci est le contenu global
      <View style={styles.main_container}>
      
        <Image style={styles.image}
          source={{uri: "image"}}/>

        <View style={styles.content_container}>
          <View style={styles.content_header}>
            <Text style={styles.title_text}>Titre du film</Text>
            <Text style={styles.vote_text}>Nahil et papa</Text>
          </View>
        </View>
      </View>
      // fin du contenu global
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },

  main_container: {
    height: 190,
    flexDirection: 'row'
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },

  vote_text : {
    fontSize : 30,
    fontWeight: 'bold'
  }
})

export default FilmItem