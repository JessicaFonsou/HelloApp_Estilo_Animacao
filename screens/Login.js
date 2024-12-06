import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navegacao = useNavigation();

    const executarLogin =() =>{
            Alert.alert('Olá, Usuário' + email);
            navegacao.navigate('Interno');
        };

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput value={email} onChangeText={setEmail} />
            <Text>Senha</Text>
            <TextInput value={senha} onChangeText={setSenha} secureTextEntry />

            <Button title="Entrar" onPress={ () => navegacao.navigate('Interno')}/>
            <Button title="Voltar" onPress={ () => navegacao.navigate('Home')}/>
        </View>

    );

};

export default LoginScreen;