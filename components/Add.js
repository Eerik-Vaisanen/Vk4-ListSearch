import { useState } from "react";
import React from "react";
import { View,Button, TextInput,StyleSheet } from "react-native";



export default function Add({items, setItems}){
const [firstName, setFirstName] =useState('')
const [lastName, setLastname] = useState('')

const save = () => {
    const newPerson = {
        id: items.lenght + 1,
        lastname: lastName,
        firstname: firstName,
    }
    const tempItems = [...items, newPerson]
    setItems(tempItems)
    setFirstName('')
    setLastname('')
}

return(
<View style ={styles.container}>
    <TextInput
    value={firstName}
    onChangeText={text => setFirstName(text)}
    placeholder='Firstname...'
/>

<TextInput
    value={lastName}
    onChangeText={text => setLastname(text)}
    placeholder='Lastname...'

/>
<Button title='Save' onPress={save} />
</View>

)
}

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBotton: 16
}

})

