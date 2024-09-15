import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { userProfile, userPosts } from '../data/dummyData';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userProfile.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userProfile.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userProfile.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.username}>{userProfile.username}</Text>
      <Text style={styles.bio}>{userProfile.bio}</Text>
      <View style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </View>
      <FlatList
        data={userPosts}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: 'gray',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  bio: {
    fontSize: 14,
    marginLeft: 15,
    marginTop: 5,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    margin: 15,
  },
  editProfileText: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '33.33%',
    aspectRatio: 1,
  },
});