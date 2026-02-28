import { products } from "../../products";
import { View, Text, Image , FlatList, Button } from "react-native"
import { useRouter } from "expo-router";

export default function ProductList() {
  const router = useRouter();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Button title="View Details" onPress={() => router.push(`/test/${item.id}/`)} />
        </View>
      )}
    />
  )
}