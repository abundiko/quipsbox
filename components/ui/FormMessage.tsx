import { View, Text } from "react-native";
import React from "react";
import { SubmitResponse } from "@/hooks/useFormSubmit";
import { s } from "../styles";

export default function FormMessage({ error, success }: SubmitResponse) {
  if (error) return <Text className={s.message.errorClass}>{error}</Text>;
  else if (success)
    return <Text className={s.message.successClass}>{success}</Text>;
  return <></>;
}
