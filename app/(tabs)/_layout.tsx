import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: 'About me',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'happy-sharp' : 'happy-outline'} color={color} size={24} />
        ),
      }}/>
      <Tabs.Screen name="languages" options={{
        title: 'My programming languages',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'ribbon-sharp' : 'ribbon-outline'} color={color} size={24} />
        ),
      }}/>
    </Tabs>
  );
}
