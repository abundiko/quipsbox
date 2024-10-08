import { View, Text, TextInput, Pressable } from "react-native";
// import React from "react";
import { s } from "../styles";
import { useFormSubmit } from "@/hooks";
import { AppInput, AppInputPropsWithName } from "../ui/AppInput";
import FormButton from "../ui/FormButton";
import { useLoginAction } from "@/actions";
import FormMessage from "../ui/FormMessage";

  const fields:AppInputPropsWithName[] = [
    {
      name: "email",
      label: "Email:",
      placeholder: "example@example.com",
      keyboardType: "email-address",
    },
    {
      name: "password",
      label: "Password:",
      placeholder: "enter password",
      type: "password",
    },
  ];
  
export default function LoginForm() {
  const { inputProps, formButtonProps, res } = useLoginAction()

  return (
    <View className="gap-y p-4 ">
      <FormMessage {...res} />
      
      {
        fields.map((field) => (
          <AppInput
            key={field.name}
            label={field.label}
            className={`${s.input.className} mb-4`}
            placeholder={field.placeholder}
            {...inputProps(field.name)}
            // errors={res.fieldErrors?.[field.name]}
          />
        ))
      }
     
      <FormButton
      {...formButtonProps}
      className={s.btn.secondaryClass}
       childrenClassName="text-neutral-100">
        Login
       </FormButton>
    </View>
  );
}
