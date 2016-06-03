import React, { Component } from 'react';
import {
  ListView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class MyListView extends Component {

  props: {
    data: Array,
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      likeNum: 0,
      dataSource: ds.cloneWithRows(this.props.data),
    }
  }

  componentWillMount() {

  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress = {() => this._onClick(this.state.likeNum)}>
          <Text style={styles.descrption}>{this.state.likeNum}</Text>
        </TouchableHighlight>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {(rowData) => this._renderItem(rowData)}
        />
      </View>
    );
  }

  _renderItem(rowData) {
    return (
      <View>
        <Text style={styles.descrption}>{rowData.iconName}</Text>
        {
          rowData.imageUrls.map((item) => <Image key={item} style={styles.thumbnail} source={{uri: item}} />)
        }
      </View>
    );
  }

  _onClick(likeNum) {
    this.setState({
      ...this.state,
      likeNum: (likeNum + 1),
    });
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    margin: 10,
    marginRight: 200,
    height: 50,
  },
  descrption: {
    margin: 10,
  },
});
