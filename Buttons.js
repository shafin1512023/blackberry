import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Btn({ title, style = styles, doAfterPress }) {
    return (
        <TouchableOpacity onPress={doAfterPress} style={styles.btnContainer}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: 'crimson',
    },
    btnContainer: {
        backgroundColor: 'white',
        padding: 10,
        width: 80,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    }
});
