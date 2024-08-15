import { ImageBackground, StyleSheet,  } from "react-native";
import {Text, TextLight, View} from '@/components/Themed'
// import React from 'react'
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { s } from "@/components/styles";
import { paths } from "@/utils/paths";

export default function index() {
  return (
    <View className="flex-1 bg-green-200">
      <StatusBar barStyle={"dark-content"} />
      <ImageBackground
        className="flex-1"
        source={require("../assets/images/bg.jpg")}
      >
        <LinearGradient
          colors={["#fff", "transparent", "#ffffffaa", "#fff", "#fff"]}
          className="flex-1"
        >
          <View className="flex-1 justify-end py-10 px-4 gap-4">
            <View className="gap-2">
              <Text className="text-4xl font-semibold">
                Where people of like and opposing passion colide
              </Text>
              <TextLight className="text-sm text-neutral-500 leading-tight">
                welcome to Quipsbox, here we do all kinds of stuff. from this to
                that and the other we got u covered
              </TextLight>
            </View>
            <View className="flex-row gap-4">
              <Link className={`${s.btn.primaryClass} flex-1`} href={paths.home}>
                Login
              </Link>
              <Link
                className={`${s.btn.secondaryClass} flex-1`}
                href={paths.signup}
              >
                Sign Up
              </Link>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      {/* <AppBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
