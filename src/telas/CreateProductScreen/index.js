import React, {useState} from "react";
import { View, TextInput, Button } from "react-native";
import { postProduct } from "../../services/api";

export default function CreateProductScreen() {
  const [product, setProduct] = useState({}); // Estado para o produto

  const handleSubmit = async () => {
    try {
      const response = await postProduct(product);
      console.log(response); // Você pode fazer algo com a resposta aqui, como redirecionar o usuário
      
    } catch (error) {
      console.log("Erro ao cadastrar produto: CreateProductScreen", error);
    }
  };

  const handleChange = (name, value) => {
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <View>
      {/* Aqui você pode adicionar os campos do seu formulário, por exemplo: */}
      <TextInput
        onChangeText={(value) => handleChange("nome", value)}
        placeholder="Nome do produto"
      />
      <TextInput
        onChangeText={(value) => handleChange("preco", value)}
        placeholder="Preço do produto"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={(value) => handleChange("quantidade", value)}
        placeholder="Quantidade"
        keyboardType="numeric"
      />
      
      <Button title="Cadastrar produto" onPress={handleSubmit} />
    </View>
  );
}
