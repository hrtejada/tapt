import { Image, StyleSheet } from "react-native";
import { ImageStackProps } from "../util/screen-navigation";

/**
 * Component that will display an image.
 *
 * Purpose is to give the user a bigger image to view more details.
 *
 * @version 0.1.2
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ImageScreen = ({ route }: ImageStackProps) => {
  const image = route.params.image;

  return (
    <Image style={styles.image} source={{ uri: image }} resizeMode="contain" />
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
  },
});
