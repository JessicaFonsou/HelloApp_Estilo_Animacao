import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigation();

    const handleCadastro = () => {
   
        Alert.alert(`Cadastro realizado com o E-mail: ${email}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>

            <Text>E-mail</Text>
            <TextInput 
                value={email} 
                onChangeText={setEmail} 
                style={styles.input} 
                placeholder="Digite seu e-mail" 
            />

            <Text>Senha</Text>
            <TextInput 
                value={senha} 
                onChangeText={setSenha} 
                secureTextEntry 
                style={styles.input} 
                placeholder="Digite sua senha" 
            />

            <Button title="Cadastrar" onPress={handleCadastro} />

            <Button 
                title="Voltar" 
                onPress={() => Alert.alert('Voltar para a Home')}  
                color="red" 
            />
        </View>
    );
};

export default Cadastro