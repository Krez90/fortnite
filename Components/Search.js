
import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDB'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            film : [],
            //on ajoute une propriété de base a false
            isLoading: false
            
        }
        this.searchedText= ""// Initialisation de notre donnée searchedText en dehors du state
    }
    // On crée une function loadFilms afin d'appeler notre api dans TMDB //
    _loadFilms(){
        this.setState({isLoading:true}) //ont recharge le film isLoading passe a true
        if (this.searchedText.length > 0){// Seulement si le texte recherché n'est pas vide
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({films: data.results, isLoading: false}));
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
              {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
          )
        }
      }

    _searchedTextInputChanged(text){
        this.searchedText = (text) // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }
    render() {
        console.log(this.state.isLoading);
        return (
            <View style={styles.contenu}>
                <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchedTextInputChanged(text)} style={styles.TextInput} placeholder="Titre du film"/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => this._loadFilms()}/>
                <FlatList data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}/>
                {this._displayLoading()} 
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contenu : {
        marginTop : 20,
        flex : 3,

    },
    
    TextInput :{
        marginLeft: 0, 
        marginRight: 0, 
        height: 50, 
        borderColor: '#000000', 
        borderWidth: 1, 
        paddingLeft: 3, 
        marginTop: 4
    },
    loading_container:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search