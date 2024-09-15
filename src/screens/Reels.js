import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { reels } from '../data/dummyData';

const ReelItem = ({ reel }) => (
  <View style={styles.reelContainer}>
    <Image source={{ uri: reel.video }} style={styles.reelVideo} />
    <View style={styles.reelInfo}>
      <Text style={styles.reelUsername}>{reel.username}</Text>
      <Text style={styles.reelCaption}>{reel.caption}</Text>
    </View>
    <View style={styles.reelActions}>
      <Ionicons name="heart-outline" size={28} color="white" style={styles.actionIcon} />
      <Text style={styles.actionText}>{reel.likes}</Text>
      <Ionicons name="chatbubble-outline" size={28} color="white" style={styles.actionIcon} />
      <Text style={styles.actionText}>{reel.comments}</Text>
      <Ionicons name="paper-plane-outline" size={28} color="white" style={styles.actionIcon} />
    </View>
  </View>
);

export default function Reels() {
  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={({ item }) => <ReelItem reel={item} />}
        keyExtractor={(item) => item.id}
        snapToInterval={styles.reelContainer.height}
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  reelContainer: {
    height: '100%',
  },
  reelVideo: {
    ...StyleSheet.absoluteFillObject,
  },
  reelInfo: {
    position: 'absolute',
    bottom: 80,
    left: 10,
  },
  reelUsername: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  reelCaption: {
    color: 'white',
    maxWidth: '80%',
  },
  reelActions: {
    position: 'absolute',
    right: 10,
    bottom: 80,
  },
  actionIcon: {
    marginBottom: 5,
  },
  actionText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
});