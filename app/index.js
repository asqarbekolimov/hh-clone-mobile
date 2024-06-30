import { SafeAreaView } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MyJobs, PopularJobs, Search } from '../components'

export default function index() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
			<GestureHandlerRootView
				showsHorizontalScrollIndicator={false}
				style={{ marginTop: 35 }}
			>
				<Search />
				<MyJobs />
				<PopularJobs />
			</GestureHandlerRootView>
		</SafeAreaView>
	)
}
