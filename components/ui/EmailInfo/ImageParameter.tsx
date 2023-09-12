import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";
import { ImageNavigationProps } from "../../../util/screen-navigation";

interface Props {
  id: string;
  parameter: string;
  images: string[];
}

/**
 * Component that will display an image parameter and info.
 *
 * @version 0.1.1
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ImageParameter = ({ id, parameter, images }: Props) => {
  const navigation = useNavigation<ImageNavigationProps>();

  /**
   * Handle an image being pressed.
   *
   * Bring up the Image Screen modal to show the image larger for the user to get
   * a better look.
   *
   * @param {string} image - String to display the image larger on the modal
   */
  const imagePressHandler = (image: string) => {
    navigation.navigate("Image", {
      image: image,
    });
  };

  /**
   * Map each image to an Image component.
   *
   * Create a unique key for each image and display the image in a reasonable format.
   * TODO: Find a better way to create a unique key
   */
  const imagesDisplay = images.map((image) => {
    const key = id + Math.random();
    return (
      <Pressable key={key} onPress={imagePressHandler.bind(this, image)}>
        <Image style={styles.image} source={{ uri: image }} />
      </Pressable>
    );
  });

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.parameter}>{parameter.toUpperCase()}</Text>
      {imagesDisplay}
    </View>
  );
};

export default ImageParameter;

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: GlobalStyles.colors.secondary400,
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
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginVertical: 8,
  },
});
