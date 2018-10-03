import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from "../../themes/colors";
import ArticleComponent from '../../components/ArticleCompent'


const articleList = [
    {
        title: "Top 10 South African beaches",
        subtitle: "hraisuhra",
        body: "Clifton, Western Cape",
        imgUrl: "http://bit.ly/2GfzooV",
        key: 0

    },
    {
        title: "efwefwefwefweweaches",
        subtitle: "hraisuhra",
        body: "Clifton, Western Cape",
        imgUrl: "https://raw.githubusercontent.com/dwicao/react-native-login-screen/master/demo.gif",
        key: 0
    }
]

export default class ArticleListScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                 {
                    articleList.forEach((e, i) => {
                        return <ArticleComponent article={e} key={i}/>
                    })
                }
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
