import React from "react";
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import mapMarker from "../images/map-marker.png";

function OrphanagesMap() {
	const navigation = useNavigation();

	function handleNavigateToOrphanageDetails() {
		navigation.navigate("OrphanageDetails");
	}

	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				initialRegion={{
					latitude: -27.2092052,
					longitude: -49.6401092,
					latitudeDelta: 0.008,
					longitudeDelta: 0.008,
				}}
			>
				<Marker
					icon={mapMarker}
					calloutAnchor={{ x: 2.8, y: 0.8 }}
					coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
				>
					<Callout tooltip onPress={handleNavigateToOrphanageDetails}>
						<View style={styles.calloutContainer}>
							<Text style={styles.calloutText}>Lar das meninas</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>

			<View style={styles.footer}>
				<Text style={styles.footerText}>2 orfanatos encontrados</Text>

				<TouchableOpacity style={styles.createOrphanageButton}>
					<Feather color="#fff" name="plus" size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	calloutContainer: {
		justifyContent: "center",
		width: 160,
		height: 46,
		paddingHorizontal: 16,
		borderRadius: 16,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
	calloutText: {
		fontFamily: "Nunito_700Bold",
		fontSize: 14,
		color: "#0089a5",
	},
	footer: {
		position: "absolute",
		right: 24,
		left: 24,
		bottom: 32,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 56,
		paddingLeft: 24,
		borderRadius: 20,
		backgroundColor: "#fff",
		elevation: 3,
	},
	footerText: {
		fontFamily: "Nunito_700Bold",
		color: "#8fa7b3",
	},
	createOrphanageButton: {
		justifyContent: "center",
		alignItems: "center",
		width: 56,
		height: 56,
		borderRadius: 20,
		backgroundColor: "#15c3d6",
	},
});

export default OrphanagesMap;
