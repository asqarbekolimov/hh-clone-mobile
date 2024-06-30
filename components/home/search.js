import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { filterJobTypes } from '../../constants'

export default function Search() {
	const activeFilter = 'Full-Time'
	return (
		<View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrappper}>
					<TextInput
						style={styles.searchStyle}
						placeholder='What are you looking for?'
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn}>
					<Image
						style={styles.searchBtnIcon}
						source={require('../../assets/icons/search.png')}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>

			{/* Filter Container */}
			<View style={styles.filterContainer}>
				<FlatList
					data={filterJobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.filter(activeFilter, item)}>
							<Text style={styles.filterTitle(activeFilter, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={item => `filter=job-${item}`}
					contentContainerStyle={{ columnGap: 10 }}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	searchContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginTop: 20,
		height: 50,
	},
	searchWrappper: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	searchStyle: {
		width: '100%',
		height: '100%',
		paddingHorizontal: 10,
	},
	searchBtn: {
		width: 50,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
	searchBtnIcon: {
		width: '70%',
		height: '70%',
		tintColor: '#fff',
	},
	filterContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	filter: (activeFilterJob, item) => ({
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderColor: activeFilterJob === item ? '#000' : '#fff',
		backgroundColor: activeFilterJob === item ? '#000' : '#fff',
	}),
	filterTitle: (activeFilterJob, item) => ({
		color: activeFilterJob === item ? '#fff' : '#000',
	}),
})
