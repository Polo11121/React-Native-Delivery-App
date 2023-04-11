import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { RootStackParamList } from "App";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Animation from "react-native-animatable";
import * as Progress from "react-native-progress";

type Props = NativeStackScreenProps<RootStackParamList, "PlaceOrder">;

export const PlaceOrder = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  });

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animation.Image
        source={require("assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />

      <Animation.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to Accept your Order !!
      </Animation.Text>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="white"
      ></Progress.Circle>
    </SafeAreaView>
  );
};
