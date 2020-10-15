import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import theme from "../../styles/theme";

import { NativeCard } from "../../components/Card";
import { NativeText } from "../../components/Text";

function NativeStyles() {
  return (
    <ScrollView style={styles.container}>
      <NativeCard>
        <NativeText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
        </NativeText>
        <NativeText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
        </NativeText>
        <NativeText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          accusamus doloremque sunt nulla? Alias eius repellat voluptates nihil
        </NativeText>
        <NativeText style={styles.text}>Font Family Test</NativeText>
      </NativeCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  text: {
    marginVertical: 20,
    fontSize: 32,
    fontFamily: "LongCang-Regular",
  },
});

export default NativeStyles;
