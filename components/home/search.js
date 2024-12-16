import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES, filterJobTypes, icons } from '../../constants'
import { useRouter } from 'expo-router'

export default function Search() {
	const [activeJobType, setActiveJobType] = useState('Full-Time')
	const [term, setTerm] = useState("")

	const router =useRouter()

	const onPress = (item)=>{
		setActiveJobType(item)
		router.push(`/search/${item}`)
	}

	const onSearchPress = ()=>{
		if(term.trim().length===0){
			return
		}
		router.push(`/search/${term}`)
	}

	return (
		<View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrappper}>
					<TextInput
						style={styles.searchInput}
						placeholder='What are you looking for?'
						value={term}
						onChangeText={text=>setTerm(text)}
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={onSearchPress}>
					<Image
						style={styles.searchBtnIcon}
						source={icons.search}
						resizeMode='contain'
					/>
				</TouchableOpacity>
			</View>

			{/* Filter Container */}
			<View style={styles.filterContainer}>
				<FlatList
					data={filterJobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity style={styles.filter(activeJobType, item)} onPress={()=>onPress(item)}>
							<Text style={styles.filterTitle(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={item => `filter=job-${item}`}
					contentContainerStyle={{ columnGap: SIZES.xSmall }}
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
		marginTop: SIZES.xLarge,
		height: 50,
	},
	searchWrappper: {
		flex: 1,
		backgroundColor: COLORS.lightWhite,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	searchInput: {
		width: '100%',
		height: '100%',
		paddingHorizontal: SIZES.medium,
		fontFamily: FONTS.medium,
	},
	searchBtn: {
		width: 50,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.tertiary,
	},
	searchBtnIcon: {
		width: '70%',
		height: '70%',
		tintColor: COLORS.white,
	},
	filterContainer: {
		alignItems: 'center',
		marginTop: SIZES.large,
	},
	filter: (activeFilterJob, item) => ({
		paddingVertical: SIZES.small / 2,
		paddingHorizontal: SIZES.small,
		borderWidth: 1,
		borderColor:
			activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
		backgroundColor:
			activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
	}),
	filterTitle: (activeFilterJob, item) => ({
		color: activeFilterJob === item ? COLORS.white : COLORS.gray,
		fontFamily: FONTS.bold,
	}),
})
