import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navegacao = useNavigation();

    // Configurando a animação de cores
    const colorAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(colorAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(colorAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, [colorAnim]);

    // Mapeando a animação para interpolar cores
    const textColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#FF5733', '#33C4FF'], // Alternando entre laranja e azul
    });

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, { color: textColor }]}>
                Hello World!
            </Animated.Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Ir para Login"
                    onPress={() => navegacao.navigate('Login')}
                />

                <Text style={styles.infoText}>Não possui login</Text>

                <Button
                    title="Cadastrar"
                    onPress={() => navegacao.navigate('Cadastro')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32, // Tornando o texto maior
        fontWeight: 'bold', // Negrito para destaque
        marginBottom: 40, // Espaço entre o título e os botões
    },
    buttonContainer: {
        width: '80%', // Largura para centralizar os botões
        alignItems: 'center', // Alinha o texto ao centro
    },
    infoText: {
        color: 'red', // Texto em vermelho
        marginVertical: 15, // Espaçamento acima e abaixo do texto
        fontSize: 16, // Tamanho do texto
        fontWeight: '600', // Negrito leve para destaque
    },
});

export default HomeScreen;
