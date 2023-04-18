import { Stack, useSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const MessageRoom = () => {
	const { id } = useSearchParams()
	return (
		<View>
			<Text style={{fontSize: 30}}>Message Room with id: {id}</Text>
		</View>
	)
}

export default MessageRoom