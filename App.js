import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Btn from "./Buttons";
import styles from './appsStyles'

export default function App() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.counter}>
                <Text style={styles.heading}>BlackBerry 🫐</Text>
                <Text style={styles.text}>{count}</Text>
                <View style={styles.btnContainer}>
                    <Btn title="Count" doAfterPress={increase} />
                    <Btn title="Reset" doAfterPress={reset}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

