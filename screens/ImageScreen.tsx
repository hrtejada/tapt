import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  View,
} from "react-native";
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
 * @version 0.3.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ImageScreen = ({ route }: ImageStackProps) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnimationLoader = useRef(new Animated.Value(1)).current;
  const fadeAnimationImage = useRef(new Animated.Value(0)).current;

  const image = route.params.image;

  setTimeout(() => {}, 1000);
  const onImageLoad = () => {
    setIsLoading(false);
    Animated.timing(fadeAnimationLoader, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnimationImage, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };
  if (!image) {
    return <Text style={styles.message}>No Image provided</Text>;
  }

  return (
    <View style={styles.container}>
      {isLoading && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              flex: 1,
              opacity: fadeAnimationLoader,
              justifyContent: "center",
            },
          ]}
        >
          <ActivityIndicator
            size={"large"}
            color={GlobalStyles.colors.primary300}
          />
        </Animated.View>
      )}
      <Animated.Image
        style={[styles.image, { opacity: fadeAnimationImage }]}
        source={{ uri: image }}
        resizeMode="contain"
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={onImageLoad}
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
  },
  message: {
    fontSize: 32,
    textAlign: "center",
    color: GlobalStyles.colors.warning500,
  },
});
