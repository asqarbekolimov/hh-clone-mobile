import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SHADOWS, SIZES } from "../../constants";

export default function MyJobCard({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.employerWrapper}>
        <View style={styles.employerHeader}>
        <Image
            source={{
              uri: item?.employer_logo
                ? item.employer_logo
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0-uMT750aKUESYouIjtAZkT13UALJtvxz2V1&s=0",
            }}
            style={styles.employerLogo}
          />
          <Text style={styles.employerTitle}>
            {item?.employer_name.length >= 20
              ? item?.employer_name.slice(0, 20) + "..."
              : item?.employer_name}
          </Text>
        </View>
        <TouchableOpacity style={styles.heartBtnWrapper}>
          <Image source={icons.heart} style={styles.heartIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName}>{item?.job_title}</Text>

        <View style={styles.infoWrapper}>
          <Text style={styles.info1}>Employer type - </Text>
          <Text style={styles.info2}>{item?.job_employment_type}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.info1}>{item?.job_publisher} - </Text>
          <Text style={styles.info2}>{item?.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.medium,
    padding: SIZES.xLarge,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  employerLogo: {
    width: 50,
    height: 50,
  },
  employerWrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  employerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.xSmall,
  },
  employerTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    color: COLORS.gray,
  },
  infoContainer: {
    marginTop: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },
  infoWrapper:{
    flexDirection: "row",
    marginTop: SIZES.small/2,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  info1: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
  },
  info2: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
});
