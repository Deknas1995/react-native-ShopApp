import { FlatList, StyleSheet, Text, View } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import React from "react";
import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductListItem product={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.FlatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  FlatListContent:{
    paddingBottom: 20,
  },
  flatListColumn:{
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: "#f9c2ff",
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
  },
});
