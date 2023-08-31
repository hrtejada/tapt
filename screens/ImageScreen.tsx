import { Image, StyleSheet, View } from "react-native";
import { ImageScreenProps } from "../App";
import { GlobalStyles } from "../constants/styles";

/**
 * Component that will display an image.
 *
 * Purpose is to give the user a bigger image to view more details.
 *
 * @version 0.1.0
 * @author  Ralph Woiwode <https://github.com/RAWoiwode>
 */
const ImageScreen = ({ route }: ImageScreenProps) => {
  const image = route.params.image;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: GlobalStyles.colors.accent700,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    marginVertical: 8,
  },
});
