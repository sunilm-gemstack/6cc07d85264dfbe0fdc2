import {StyleSheet} from 'react-native';

const  styles = StyleSheet.create({
    textInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginHorizontal: 2,
    },
    box: {
        height: 30,
        width: '60%',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 20,
    },
    disabled: {
        height: 30,
        width: '60%',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 20,
    },
    random: {
        marginTop: 30,
        width: '60%',
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 20,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    container: {
        flex: 1,
        margin: '10%',
    },
});

export default styles
