
import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.contenu}>
                <TextInput style={styles.TextInput} placeholder="Titre du film"/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => {}}/>
                <FlatList data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem/>}/>
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
    }
})

export default Search


import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.contenu}>
                <TextInput style={styles.TextInput} placeholder="Titre du film"/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => {}}/>
                <FlatList data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem/>}/>
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
    }
})

export default Search

import React from 'react'
import {StyleSheet, View, Button, TextInput, FlatList, Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.contenu}>
                <TextInput style={styles.TextInput} placeholder="Titre du film"/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => {}}/>
                <FlatList data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem/>}/>
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
    }
})

export default Search