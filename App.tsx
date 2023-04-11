import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "screens/Home/Home";
import { Restaurant } from "screens/Restaurant/Restaurant";
import { store } from "store/store";
import { Provider } from "react-redux";
import { Cart } from "screens/Cart/Cart";
import { PlaceOrder } from "screens/PlaceOrder/PlaceOrder";
import { Delivery } from "screens/Delivery/Delivery";
import { RestaurantType } from "types/types";

export type RootStackParamList = {
  Home: undefined;
  Restaurant: RestaurantType;
  Cart: undefined;
  PlaceOrder: undefined;
  Delivery: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PlaceOrder"
            component={PlaceOrder}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={Delivery}
            options={{
              presentation: "fullScreenModal",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
        <StatusBar />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
