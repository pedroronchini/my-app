import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Schedule from '../pages/Schedule';
import Contact from '../pages/Contact';
import AddContact from '../pages/AddContact';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator 
    headerMode="none" 
    screenOptions={{ cardStyle: {backgroundColor: '#858585'}, }}
  >
    <stackRoutes.Screen 
      name="Login"
      component={Login}
    />

    <stackRoutes.Screen 
      name="Schedule"
      component={Schedule}
    />

    <stackRoutes.Screen 
      name="Contact"
      component={Contact}
    />

    <stackRoutes.Screen 
      name="AddContact"
      component={AddContact}
    />

  </stackRoutes.Navigator>
);

export default AppRoutes;