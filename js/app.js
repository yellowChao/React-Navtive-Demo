import React, { Component } from 'react';
import MyListView from './MyListView';

const modelList = [
  {
    iconName: '测试1',
    likeNum: 0,
    imageUrls: [
      'http://i.imgur.com/UePbdph.jpg1',
      'http://i.imgur.com/UePbdph.jpg2',
      'http://i.imgur.com/UePbdph.jpg3',
    ],
  },
  {
    iconName: '测试2',
    likeNum: 0,
    imageUrls: [
      'http://i.imgur.com/UePbdph.jpg4',
      'http://i.imgur.com/UePbdph.jpg5',
      'http://i.imgur.com/UePbdph.jpg6',
    ],
  },
]

class App extends Component {

  render() {
    return (
      <MyListView
        data = {modelList}
      />
    );
  }

}

module.exports = App;
