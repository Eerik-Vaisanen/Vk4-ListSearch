import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import {DATA} from './Data';
import Row from './components/Row';
import Add from './components/Add';

export default function App() {
const  [items, setItems] = useState([]);
const [selectedId, setSelectedId] = useState(null)
useEffect(()=>{
  setItems(DATA)
}, [])


const select = (id) =>{
  setSelectedId(id)
}

const executeSearch = (search) => {
  const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
  setItems(searchArray)
}
return (
  <SafeAreaView style={styles.container}>
   <Search executeSearch={executeSearch} />
   <Add items={items} setItems={setItems}/>
   <FlatList
   data={items}
   renderItem={({ item }) => (
       <Row person={item} selectedId={selectedId} select={select} />
   )}
   ></FlatList>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
