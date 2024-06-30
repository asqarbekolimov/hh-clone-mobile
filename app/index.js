import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaView } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MyJobs, PopularJobs, Search } from '../components'

SplashScreen.preventAutoHideAsync()

export default function index() {
	const [loaded, error] = useFonts({
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
		'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
	})

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync()
		}
	}, [loaded, error])

	if (!loaded && !error) {
		return null
	}

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
