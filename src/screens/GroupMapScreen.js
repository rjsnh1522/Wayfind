import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Linking, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Phone, Navigation, MessageCircle } from 'lucide-react';
import { Alert } from '@/components/ui/alert';

const GroupMapScreen = ({ route, navigation }) => {
  const { groupId } = route.params;
  const [selectedMember, setSelectedMember] = useState(null);
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={currentLocation}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {members.map((member) => (
          <Marker
            key={member.id}
            coordinate={member.location}
            onPress={() => setSelectedMember(member)}
          >
            <View style={styles.markerContainer}>
              <Image
                source={{ uri: member.photo }}
                style={styles.markerImage}
              />
            </View>
          </Marker>
        ))}
      </MapView>

      {selectedMember && (
        <View style={styles.memberCard}>
          <View style={styles.memberInfo}>
            <Image
              source={{ uri: selectedMember.photo }}
              style={styles.memberPhoto}
            />
            <View>
              <Text style={styles.memberName}>{selectedMember.name}</Text>
              <Text style={styles.lastUpdate}>
                Last updated: {formatTime(selectedMember.lastUpdate)}
              </Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => Linking.openURL(`tel:${selectedMember.phone}`)}
            >
              <Phone size={24} color="#6540F5" />
              <Text>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleGetDirections(selectedMember.location)}
            >
              <Navigation size={24} color="#6540F5" />
              <Text>Directions</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('Chat', { memberId: selectedMember.id })}
            >
              <MessageCircle size={24} color="#6540F5" />
              <Text>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!locationEnabled && (
        <Alert variant="destructive" className="absolute top-4 mx-4">
          <AlertTitle>Location Sharing Disabled</AlertTitle>
          <AlertDescription>
            Enable location sharing to let group members see your location
          </AlertDescription>
        </Alert>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 2,
    elevation: 3,
  },
  markerImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  memberCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  memberPhoto: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '600',
  },
  lastUpdate: {
    color: '#666',
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    gap: 4,
  },
});

export default GroupMapScreen;