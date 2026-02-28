import { useLocalSearchParams } from "expo-router";
import { products } from "../../../products";
import { FlatList, View, Text, Image } from "react-native";

export default function ProductDetails() {
  const { id } = useLocalSearchParams()
  console.log(id)
  const product = products.find(p => p.id == id)
  console.log(product)
  
  return (
    <FlatList
      data={product}
      renderItem={( item ) => (
        <View>
          <Image source={ item.image } style={{ width: 100, height: 100 }} />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
    />
  )

}