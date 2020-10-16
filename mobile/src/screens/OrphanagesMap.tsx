import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import api from "../services/api";

import mapMarker from "../images/map-marker.png";

interface Orphanage {
	id: number;
	name: string;
	latitude: number;
	longitude: number;
}

function OrphanagesMap() {
	const navigation = useNavigation();

	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

	useEffect(function () {
		api.get("/orphanages").then(function (response) {
			setOrphanages(response.data);
		});
	}, []);

	function handleNavigateToOrphanageDetails(id: number) {
		navigation.navigate("OrphanageDetails", {
			id,
		});
	}

	function handleNavigateToCreateOrphanage() {
		navigation.navigate("SelectMapPosition");
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
				{orphanages.map(function (orphanage) {
					return (
						<Marker
							key={orphanage.id}
							icon={mapMarker}
							calloutAnchor={{ x: 2.8, y: 0.8 }}
							coordinate={{
								latitude: orphanage.latitude,
								longitude: orphanage.longitude,
							}}
						>
							<Callout
								tooltip
								onPress={function () {
									handleNavigateToOrphanageDetails(orphanage.id);
								}}
							>
								<View style={styles.calloutContainer}>
									<Text style={styles.calloutText}>{orphanage.name}</Text>
								</View>
							</Callout>
						</Marker>
					);
				})}
			</MapView>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					{orphanages.length} orfanatos encontrados
				</Text>

				<RectButton
					style={styles.createOrphanageButton}
					onPress={handleNavigateToCreateOrphanage}
				>
					<Feather color="#fff" name="plus" size={20} />
				</RectButton>
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
