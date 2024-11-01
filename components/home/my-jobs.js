import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import useRequest from "../../hook/useRequest";
import { COLORS, FONTS, SIZES } from "../../constants";
import MyJobCard from "../cards/my-job.card";

export default function MyJobs() {
  // const isLoading = true;
  // const data = [];
  const { data, error, isLoading } = useRequest("search", {
    query: "react",
    page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Jobs for you</Text>
      </View>

      <View style={styles.jobsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"small"} color={COLORS.primary} />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <MyJobCard item={item} />}
            keyExtractor={(item) => `job-${item.job_id}`}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONTS.medium,
    color: COLORS.primary,
  },
  jobsContainer: {
    marginTop: SIZES.medium,
  },
});
