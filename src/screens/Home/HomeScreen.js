import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ToastAndroid} from 'react-native';
import {Container, Header, Content, Form, Item, Input} from 'native-base';
import {TextInput} from 'react-native';
import axios from 'axios';
import * as CONST from '../../constants/constant';
import styles from './HomeStyles';

const HomeScreen = (props) => {
    const [id, setId] = useState('');
    const handleChange = (text) => {
        setId(text);
    };

    const onPressSubmit = () => {
        const param = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${CONST.API_KEY}`;
        axios.get(param).then((response) => {
            console.log(response);
                // ToastAndroid.show('Success', ToastAndroid.SHORT);
                props.navigation.navigate('info', {
                    data: response.data,
                });
        }).catch(err => {
            ToastAndroid.show('Invalid Asteroid Id Entered !', ToastAndroid.SHORT);
        });
    };

    const onPressRandom = () => {
        const param = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${CONST.API_KEY}`;
        axios.get(param).then((response) => {
            console.log(response.data);
            const array = response.data.near_earth_objects;
            const min = 0;
            const max = array.length - 1;
            console.log(max);
            let random = min + (Math.random() * (max - min));
            random = Math.floor(random);
            const asteroidId = array[random].id;
            const url = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${CONST.API_KEY}`;
            axios.get(url).then((response) => {
                console.log(response.data);
                props.navigation.navigate('info', {
                    data: response.data,
                });
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log(err);
        });
    };

    return (
        <Container>
            <Content>
                <View style={styles.container}>
                    <TextInput placeholder={'Asteroid Id'} style={styles.textInput} onChangeText={handleChange}/>
                    <TouchableOpacity onPress={() => {
                        onPressSubmit();
                    }} style={{alignItems: 'center'}} disabled={id === '' ? true : false}>
                        <View style={id==='' ? styles.disabled : styles.box}>
                            <Text style={styles.text}>SUBMIT</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onPressRandom();
                        }} style={{alignItems: 'center'}}>
                        <View style={styles.random}>
                            <Text style={styles.text}>Random Asteroid</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

    );
};




export default HomeScreen;
