import { useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { ImageStackProps } from "../util/react-navigation";

/**
 * ImageScreen Component.
 *
 * This component renders an image.
 *
 * Purpose is to give the User a bigger image to view more details.
 *
 * TODO: Look into why loading stays active while image is on screen e.g. Zoro in test data
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ImageScreen = ({ route }: ImageStackProps) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const image = route.params.image;

  if (!image) {
    return <Text style={styles.message}>No Image provided</Text>;
  }

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          size={"large"}
          style={{ flex: 1 }}
          color={GlobalStyles.colors.accent500}
        />
      )}
      <Image
        style={styles.image}
        source={{ uri: image }}
        resizeMode="contain"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setError(true)}
      />
      {error && <Text style={styles.message}>Failed to load image</Text>}
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.colors.accent300,
  },
  message: {
    fontSize: 32,
    textAlign: "center",
    color: GlobalStyles.colors.warning500,
  },
});
