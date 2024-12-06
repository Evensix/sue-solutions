// RootLayout.tsx
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Slot } from "expo-router";
import { useColorScheme } from "~/hooks/useColorScheme";
import { FormProvider } from "~/hooks/useFormProvider";
import "react-native-reanimated";
import { View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    JakartaSans: require("../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (storybookEnabled) {
    // If Storybook is enabled, show the Storybook UI.
    const StorybookUI = require("../.storybook/native").default;
    return (
      <View style={{ flex: 1 }}>
         <SafeAreaView style={{ flex: 1 }}>
          <StorybookUI />
         </SafeAreaView>
      </View>
    );
  }

  return (
    <FormProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Slot />
        </SafeAreaView>
        <StatusBar style="auto" />
      </ThemeProvider>
    </FormProvider>
  );
}
