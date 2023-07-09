import { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Voice from "@react-native-voice/voice";

import Header from "./src/components/Header";
import LanguageSelectionList from "./src/components/LanguageSelectionList";
import CustomButton from "./src/components/Parts/CustomButton";

export default function App() {
  const [language, setLanguage] = useState<string | null>(null);
  const [text, setText] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleStart = () => {
    if (!language) {
      window.alert("言語を選択してください");
      return false;
    }

    Voice.start(language);
  };

  return (
    <View style={styles.device}>
      <Header />

      <View style={styles.container}>
        {/* 言語設定 */}
        <View style={styles.section}>
          <LanguageSelectionList
            onSelect={setLanguage}
            disabled={isRecording}
          />
        </View>

        {/* Buttons */}
        {language && (
          <View style={[styles.section, styles.controler]}>
            <View style={{ flex: 1 }}>
              <CustomButton
                title="Start"
                disabled={isRecording}
                onPress={() => {
                  setIsRecording(true);
                  handleStart();
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CustomButton
                title="Stop"
                disabled={!isRecording}
                backgroundColor="red"
                onPress={() => {
                  setIsRecording(false);
                }}
              />
            </View>
          </View>
        )}

        {/* テキスト */}
        <View style={styles.section}>
          <Text>{text}</Text>
        </View>
      </View>

      {/* ステータスバー */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  device: {
    width: "100%",
    height: "100%",
  },
  container: {
    paddingHorizontal: 16,
    width: "100%",
    height: "100%",
  },
  section: {
    paddingTop: 24,
  },
  controler: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
});
