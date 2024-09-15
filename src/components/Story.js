import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Story({ story }) {
  return (
    <View style={styles.container}>
      <View style={styles.storyRing}>
        <Image source={{ uri: story.userAvatar }} style={styles.avatar} />
      </View>
      <Text style={styles.username}>{story.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
    marginLeft: 15,
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#e1306c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    marginTop: 5,
    fontSize: 12,
  },
});