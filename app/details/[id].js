import { View, Text, ScrollView, ActivityIndicator,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, icons, SIZES, tabs } from '../../constants'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import HeaderBtn from '../../components/shared/header-btn'
import  useRequest  from '../../hook/useRequest'
import { Job, JobTabs } from '../../components'

export default function Details() {
  const params = useGlobalSearchParams()
  const router = useRouter()

  const [activeTab, setActiveTab] = useState(tabs[1])

  const {data, isLoading, error, refetch} =useRequest('job-details', {
    job_id: params.id
  })

  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
      <Stack.Screen options={{
        headerShadowVisible:false,
        headerTitle: "",
        headerStyle:{
          backgroundColor: COLORS.lightWhite,
        },
        headerLeft: () => <HeaderBtn icon={icons.left} dimensions={'60%'} onPress={()=>router.back()}/>,
        headerRight: () => <HeaderBtn icon={icons.share} dimensions={'60%'}/>
      }}/>
      <>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={COLORS.primary} />
        ): error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ?(
          <Text>No data available</Text>
        ):(
          <View style={{padding:SIZES.medium, paddingBottom:SIZES.large}}>
            <Job companyLogo={data[0].employer_logo} jobTitle={data[0].job_title} companyName={data[0].employer_name} location={data[0].job_country}/>
            <JobTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          </View>
        )}
      </ScrollView>
      </>
    </SafeAreaView>
  )
}