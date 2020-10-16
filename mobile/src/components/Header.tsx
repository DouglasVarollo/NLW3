import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
	title: string;
	showCancel?: boolean;
}

function Header(props: HeaderProps) {
	const { showCancel = true, title } = props;

	const navigation = useNavigation();

	function handleGoBackToAppHomepage() {
		navigation.navigate("OrphanagesMap");
	}

	return (
		<View style={styles.container}>
			<BorderlessButton onPress={navigation.goBack}>
				<Feather color="#15b6d6" name="arrow-left" size={24} />
			</BorderlessButton>

			<Text style={styles.title}>{title}</Text>

			{showCancel ? (
				<BorderlessButton onPress={handleGoBackToAppHomepage}>
					<Feather color="#ff669d" name="x" size={24} />
				</BorderlessButton>
			) : (
				<View />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 24,
		paddingTop: 44,
		borderBottomWidth: 1,
		borderColor: "#dde3f0",
		backgroundColor: "#f9fafc",
	},
	title: {
		fontFamily: "Nunito_600SemiBold",
		fontSize: 16,
		color: "#8fa7b3",
	},
});

export default Header;
