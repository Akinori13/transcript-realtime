import { StyleSheet, View } from "react-native";
import { Button, ButtonProps } from "@rneui/themed";

type CustomButtonProps = ButtonProps & {
  backgroundColor?: string;
};

const CustomButton = (props: CustomButtonProps) => {
  return (
    <View style={styles.button}>
      <Button
        {...props}
        buttonStyle={
          props.backgroundColor && {
            backgroundColor: props.backgroundColor,
          }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "auto",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default CustomButton;
