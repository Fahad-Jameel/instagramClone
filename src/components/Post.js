import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
        <TouchableOpacity style={styles.moreOptions}>
          <Ionicons name="ellipsis-horizontal" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: post.image }} style={styles.image} />
      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.saveIcon}>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.likes}>{post.likes} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>{post.username}</Text> {post.caption}
      </Text>
      <Text style={styles.commentsCount}>View all {post.commentsCount} comments</Text>
      <Text style={styles.timestamp}>{post.timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    flex: 1,
  },
  moreOptions: {
    padding: 5,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  saveIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  likes: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  caption: {
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  commentsCount: {
    paddingHorizontal: 10,
    color: 'gray',
    marginBottom: 5,
  },
  timestamp: {
    paddingHorizontal: 10,
    color: 'gray',
    fontSize: 12,
    marginBottom: 10,
  },
});