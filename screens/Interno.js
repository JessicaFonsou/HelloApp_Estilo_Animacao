import React, {useState} from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Interno = () => {
    const navegacao = useNavigation();
    return (
        <View>
            <Text>Seja Bem Vindo! </Text>
            
            

            <Button title="Voltar"onPress={() => navegacao.goBack()} />
        </View>
    )

};


export default Interno;
