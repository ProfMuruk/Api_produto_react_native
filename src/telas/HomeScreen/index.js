import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import {fetchProducts} from "../../services/api";

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function loadProducts() {
        try {
          const response = await fetchProducts();
          setProducts(response);
        } catch (error) {
          console.log('Erro ao buscar produtos: home', error);
        }
      }
        loadProducts();
    }, []);  

    const renderItem = ({ item }) => (
      <View>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.quantidade}</Text>
        <Text>Valor Total estoque: {(item.preco * item.quantidade).toFixed(2)} </Text>
        <Text></Text>
      </View>
    );

  return (
    <View>
      <Text>Minha tela de Home Screen</Text>
      <Button
        title="Ir para Criar produto"
        onPress={() => navigation.navigate("CreateProduct")}
      />

      <Text>Lista de Produtos:</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
