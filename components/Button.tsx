
import { Text, TouchableOpacity, StyleSheet } from "react-native";import { useTheme } from "../content/ThemeContext";
import { colors } from "../styles/colors";


type Props = {
    text: string;
    onPress: VoidFunction;
    isOrange?: boolean;
    isGray?: boolean;
}


export function Button(props: Props) {
    const { theme } = useTheme();

    
    let backgroundColor = "#343434";

    if (props.isOrange) {
        backgroundColor = theme === "dark" ? colors.buttonDark : colors.buttonLight;
    }  else if (props.isGray) {
        backgroundColor = "#a6a6a6";
    }

   

        return (
        <TouchableOpacity
            
            style={[styles.button, {backgroundColor}]}
            onPress={props.onPress} 
            >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );


}


const styles = StyleSheet.create({
    button: {
        width: 72,
        height: 72,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        backgroundColor: "orange"
    },
    text: {
        fontSize: 40,
        color: "white",
        
        
    }
})