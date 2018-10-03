import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from "../../themes/colors";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class ArticleCompent extends Component {
  render() {
    const { article } = this.props;

    return (
      /*
      <View style={styles.container}>
        <Text style={styles.articleTitle}> Titulo Artigo </Text>
        <Text style={styles.articleDescription}>
          A Wikipédia é um projeto de enciclopédia
          colaborativa, universal e multilíngue
          estabelecido na internet sob o princípio wiki.
           Tem como propósito fornecer um conteúdo livre,
           objetivo e verificável​​, que todos possam editar e
           melhorar. O projeto é definido pelos princípios fundadores.
      </Text>
      </View>
      */
      <Card>
        <CardImage
          source={{ uri: article.imgUrl }}
          title={article.title}
        />
        <CardTitle
          subtitle={article.subtitle}
        />
        <CardContent text={article.body} />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            onPress={() => { console.log(this.props.key) }}
            title="Leia mais"
            color="#FEB557"
          />
          <CardButton
            onPress={() => { }}
            title="Compartilhe"
            color="#FEB557"
          />
        </CardAction>
      </Card>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.articleComponent,
    padding: 10,
    marginTop: 5,
    elevation: 5,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,

  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleDescription: {
    marginTop: 20,
  }
});
