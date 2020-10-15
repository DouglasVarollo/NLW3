import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OrphanagesMap from "./screens/OrphanagesMap";
import OrphanageDetails from './screens/OrphanageDetails';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen component={OrphanagesMap} name="OrphanagesMap" />
				<Screen component={OrphanageDetails} name="OrphanageDetails" />
			</Navigator>
		</NavigationContainer>
	);
}

export default Routes;
