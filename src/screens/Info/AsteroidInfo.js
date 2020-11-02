import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './InfoStyles';

const InfoScreen = (props) => {
    const data = props.route.params.data;
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Text style={styles.text}>Name:</Text>
                <Text style={styles.text2}>{data.name}</Text>
            </View>
            <View style={styles.flexRow}>
                <Text style={styles.text}>Is Potentially Hazardous Asteroid: </Text>
                <Text style={styles.text2}>{data.is_potentially_hazardous_asteroid === true ? 'True' : 'False'}</Text>
            </View>
            <View style={styles.flexRow}>
                <Text style={styles.text}>NASA JPL Url: </Text>
                <Text style={styles.text2} numberOfLines={5}>{data.nasa_jpl_url}</Text>
            </View>
        </View>
    );
};

export default InfoScreen;
