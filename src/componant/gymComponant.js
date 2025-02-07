import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getGym } from '../service/gymService';

const gymList = () => {
  const [gym, setGym] = useState([]);

  useEffect(() => {
    const fetchGym = async () => {
      const data = await getGym();
      setGym(data);
    };

    fetchGym();
  }, []);

  return (
    <View>
      <FlatList
        data={gym}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default gymList;
