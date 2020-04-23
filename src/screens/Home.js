import React, { component, Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View>
                <Text>Home Page</Text>
                <View style={styles.button}>
                    <Button title='add an item'
                        onPress={() => this.props.navigation.navigate('AddItem')}
                    />
                </View>
                <View  style={styles.button}>
                    <Button
                        title="List of Items"
                        color="green"
                        onPress={() => this.props.navigation.navigate('List')}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    button: {
        width: 200,
        padding: 20
    }
})