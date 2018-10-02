import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from "../../themes/colors";
import ArticleComponent from '../../components/Articles'


export default class ArticlesScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
                <ArticleComponent />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.textBackground,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
});
