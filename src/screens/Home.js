import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import colors from '../../config/colors'

const HomeScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id. Aliquet enim tortor at auctor urna. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Tempus iaculis urna id volutpat. Dictum non consectetur a erat nam at. Nullam vehicula ipsum a arcu cursus vitae congue. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Donec enim diam vulputate ut pharetra. Bibendum est ultricies integer quis auctor elit. Ac felis donec et odio pellentesque diam volutpat commodo sed. Sit amet purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque aliquam vestibulum. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Facilisis sed odio morbi quis commodo odio aenean. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id. Aliquet enim tortor at auctor urna. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Tempus iaculis urna id volutpat. Dictum non consectetur a erat nam at. Nullam vehicula ipsum a arcu cursus vitae congue. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Donec enim diam vulputate ut pharetra. Bibendum est ultricies integer quis auctor elit. Ac felis donec et odio pellentesque diam volutpat commodo sed. Sit amet purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque aliquam vestibulum. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Facilisis sed odio morbi quis commodo odio aenean. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id. Aliquet enim tortor at auctor urna. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Tempus iaculis urna id volutpat. Dictum non consectetur a erat nam at. Nullam vehicula ipsum a arcu cursus vitae congue. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Donec enim diam vulputate ut pharetra. Bibendum est ultricies integer quis auctor elit. Ac felis donec et odio pellentesque diam volutpat commodo sed. Sit amet purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque aliquam vestibulum. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Facilisis sed odio morbi quis commodo odio aenean. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id nibh tortor id. Aliquet enim tortor at auctor urna. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Tempus iaculis urna id volutpat. Dictum non consectetur a erat nam at. Nullam vehicula ipsum a arcu cursus vitae congue. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Donec enim diam vulputate ut pharetra. Bibendum est ultricies integer quis auctor elit. Ac felis donec et odio pellentesque diam volutpat commodo sed. Sit amet purus gravida quis blandit turpis cursus. Nulla porttitor massa id neque aliquam vestibulum. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Facilisis sed odio morbi quis commodo odio aenean. Ornare arcu odio ut sem nulla pharetra diam sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.</Text>
      </View>
    </ScrollView>
  )
}

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;