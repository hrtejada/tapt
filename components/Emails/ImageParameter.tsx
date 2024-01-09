import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ImageStackProps } from "../../util/react-navigation";

interface Props {
  id: string;
  parameter: string;
  images: string[];
}

interface ImageState {
  isLoading: boolean;
  error: boolean;
  uri: string;
}

/**
 * ImageParameter Component.
 *
 * This component renders an image parameter.
 *
 * @component
 * @version 0.2.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ImageParameter = ({ id, parameter, images }: Props) => {
  const navigation = useNavigation<ImageStackProps["navigation"]>();

  // Create an array of state objects for each image
  const initialImageStates: ImageState[] = images.map((uri) => ({
    isLoading: false, // TODO: Turn on when pulling from APIs
    error: false,
    uri,
  }));
  const [imageStates, setImageStates] = useState(initialImageStates);

  /**
   * Handle an image being pressed.
   *
   * Bring up the Image Screen modal to show the image larger for the user to get
   * a better look.
   */
  const handleImagePress = (image: string) => {
    navigation.navigate("Image", { image });
  };

  const handleLoadEnd = (uri: string) => {
    updateImageState(uri, false, false);
  };

  const handleError = (uri: string) => {
    updateImageState(uri, false, true);
  };

  const updateImageState = (
    uri: string,
    isLoading: boolean,
    error: boolean
  ) => {
    setImageStates((prev) =>
      prev.map((image) =>
        image.uri === uri ? { ...image, isLoading, error } : image
      )
    );
  };

  /**
   * Map each image to an Image component.
   *
   * Create a unique key for each image and display the image in a reasonable format.
   * TODO: Find a better way to create a unique key
   */
  const renderItem = ({ item }: { item: ImageState }) => {
    if (item.isLoading) {
      return <ActivityIndicator size={"small"} />;
    }

    if (item.error) {
      return <Text style={styles.message}>Failed to load image</Text>;
    }

    return (
      <Pressable
        style={{ alignItems: "center" }}
        onPress={() => handleImagePress(item.uri)}
      >
        <Image
          style={styles.image}
          source={{ uri: item.uri }}
          onLoadEnd={() => handleLoadEnd(item.uri)}
          onError={() => handleError(item.uri)}
        />
      </Pressable>
    );
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.parameter}>{parameter.toUpperCase()}</Text>
      <FlatList
        data={imageStates}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${id}-${index}`}
      />
    </View>
  );
};

export default ImageParameter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.background100,
    marginBottom: 4,
    paddingTop: 4,
    width: "100%",
  },
  parameter: {
    color: GlobalStyles.colors.text,
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 4,
    textDecorationLine: "underline",
  },
  image: {
    width: "80%",
    height: 150,
    resizeMode: "contain",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.text,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 32,
    textAlign: "center",
    color: GlobalStyles.colors.warning500,
  },
});
