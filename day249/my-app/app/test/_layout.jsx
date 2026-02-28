import { Stack } from "expo-router";

export default function TestLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Products" }} />
      <Stack.Screen name="[id]/index" options={{ title: "Product Details" }} />
    </Stack>
  )
}