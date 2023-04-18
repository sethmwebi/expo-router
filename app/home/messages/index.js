import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Messages = () => {
	return (
		<View>
			<Link
				href="/home/messages/123"
				style={{ margin: 10, fontSize: 24 }}
			>
				Messages with Angel
			</Link>
			<Link
				href="/home/messages/456"
				style={{ margin: 10, fontSize: 24 }}
			>
				Messages with Faith
			</Link>
			<Link
				href="/home/messages/789"
				style={{ margin: 10, fontSize: 24 }}
			>
				Messages with Sharon
			</Link>
		</View>
	);
};

export default Messages;
