import React from "react";
import { View, Text, Button, Alert } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";

const Profile = () => {
	const router = useRouter();
	const { name, username } = useSearchParams();
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Stack.Screen
				options={{
					title: username,
					headerStyle: { backgroundColor: "#FFE030" },
					headerTintColor: "#1E2632"
				}}
			/>
			<Text>
				Hello, {name} (@{username})
			</Text>
			<Button onPress={() => router.back()} title="Go Back" />
		</View>
	);
};

export default Profile;
