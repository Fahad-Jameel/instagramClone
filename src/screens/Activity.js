import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { activities } from '../data/dummyData';

const ActivityItem = ({ activity }) => (
  <View style={styles.activityItem}>
    <Image source={{ uri: activity.userAvatar }} style={styles.avatar} />
    <View style={styles.activityInfo}>
      <Text style={styles.activityText}>
        <Text style={styles.username}>{activity.username}</Text> {activity.action}
      </Text>
      <Text style={styles.timestamp}>{activity.timestamp}</Text>
    </View>
    {activity.postImage && (
      <Image source={{ uri: activity.postImage }} style={styles.postImage} />
    )}
  </View>
);

export default function Activity() {
  return (
    <View style={styles.container}>
      <FlatList
        data={activities}
        renderItem={({ item }) => <ActivityItem activity={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10,
  },
  activityInfo: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
  },
  username: {
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  postImage: {
    width: 44,
    height: 44,
  },
});