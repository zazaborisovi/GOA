import { Image, StyleSheet, Text, View , ScrollView, Button} from 'react-native';
import ShopProvider, { useShopContext } from './contexts/shop.context';

export default function App() {
  const { products } = useShopContext()
  return (
    <ScrollView style={styles.main}>
      <Text>hellooo</Text>
      {products.map((product, index) => (
        <View key={`${index}2`} style={styles.container}>
          <Image key={`${index}3`} source={{ uri: product.image }} style={{width: 100, height: 100, resizeMode: "contain"}} />
          <Text key={`${index}4`}>title: {product.title}</Text>
          <Text key={`${index}5`}>price: {product.price} <Button title="Add to Cart" onPress={() => {}}/></Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#eee",
    padding: 20,
    margin: 20,
    width: 200,
    height: "auto",
    borderRadius: 20,
    
  }
})