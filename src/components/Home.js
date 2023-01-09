import React, {useEffect} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../redux/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Products</Text>
      <FlatList data={products.products} renderItem={renderItem} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'rgb(20,20,20)',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
