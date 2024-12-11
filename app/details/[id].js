import { View, Text, ScrollView, ActivityIndicator,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, icons, SIZES, tabs } from '../../constants'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import HeaderBtn from '../../components/shared/header-btn'
import  useRequest  from '../../hook/useRequest'
import { About, Footer, Job, JobTabs, Qualification, Responsibilities } from '../../components'

export default function Details() {
  const params = useGlobalSearchParams()
  const router = useRouter()

  const [activeTab, setActiveTab] = useState(tabs[0])

  const {data, isLoading, error, refetch} =useRequest('job-details', {
    job_id: params.id
  })

  const renderTabContent = () => {
    switch(activeTab){
      case "About":
        return <About info={data[0].job_description ?? "No data providede"}/>
      case "Responsibilities":
        return <Responsibilities info={data[0].job_highlights?.Responsibilities ?? ['N/A']}/>
      case "Qualifications":
        return <Qualification info={data[0].job_highlights?.Qualifications ?? ['N/A']}/>
      default:
        return <About nfo={data[0].job_description ?? "No data providede"}/>
    }
  }

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
            {renderTabContent()}
          </View>
        )}
      </ScrollView>

      <Footer url={data[0].job_google_link ?? "https://careers.google.com/jobs/results"}/>
      </>
    </SafeAreaView>
  )
}