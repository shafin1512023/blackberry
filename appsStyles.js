import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "crimson",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    counter: {
        width: "80%",
        paddingVertical: 40,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    btnContainer: {
        flexDirection: "row",
        width: "70%",
        justifyContent: "space-between",
        marginTop: 20,
    },
    text: {
        color: "crimson",
        fontSize: 40,
        marginTop: 10,
    },
    heading: {
        fontSize: 30,
        color: "crimson",
    },
});

export default styles