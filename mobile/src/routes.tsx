import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./components/Header";
import OrphanagesMap from "./screens/OrphanagesMap";
import OrphanageDetails from "./screens/OrphanageDetails";
import SelectMapPosition from "./screens/CreateOrphanage/SelectMapPosition";
import OrphanageData from "./screens/CreateOrphanage/OrphanageData";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
					cardStyle: {
						backgroundColor: "#f2f3f5",
					},
				}}
			>
				<Screen component={OrphanagesMap} name="OrphanagesMap" />
				<Screen
					component={OrphanageDetails}
					name="OrphanageDetails"
					options={{
						headerShown: true,
						header: function () {
							return <Header title="Orfanato" showCancel={false} />;
						},
					}}
				/>
				<Screen
					component={SelectMapPosition}
					name="SelectMapPosition"
					options={{
						headerShown: true,
						header: function () {
							return <Header title="Selecione no mapa" />;
						},
					}}
				/>
				<Screen
					component={OrphanageData}
					name="OrphanageData"
					options={{
						headerShown: true,
						header: function () {
							return <Header title="Informe os dados" />;
						},
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}

export default Routes;
