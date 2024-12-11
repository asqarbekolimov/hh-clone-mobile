import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

export default function Job({companyLogo, companyName, jobTitle, location, jobType}) {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          source={{
            uri: companyLogo
              ? companyLogo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0-uMT750aKUESYouIjtAZkT13UALJtvxz2V1&s=0",
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} style={styles.locationImage} resizeMode="contain"/>
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBox: {
    width: 80,
    height: 80,
    borderRadius: SIZES.large,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logoImage: {
    width: "80%",
    height: "80%"
  },
  jobTitleBox: {
    marginTop: SIZES.large,
  },
  jobTitle: {
    fontSize: SIZES.large,
    color:COLORS.primary, 
    fontFamily:FONTS.bold,
    textAlign: 'center',
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyName:{
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONTS.medium,
  },
  locationBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationImage:{
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName:{
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONTS.regular,
    marginLeft: 2,
  },
});
