import { View, Text, TextInput, TextInputProps } from "react-native";
import { s } from "../styles";

export type AppInputProps = TextInputProps & {
  label?: string;
  className?: string;
  type?: "text" | "password";
  errors?: string[];
};

export type AppInputPropsWithName = AppInputProps & {
  name: string;
};

export function AppInput({
    className,
    type,
    label = '',
    errors,
    ...props
}: AppInputProps) {
  return (
    <View className={`${className} w-full`}>
      {label && <Text className="text-neutral-500">{label}</Text>}
      <View className="mb-2">
      <TextInput
      {...props}
        className={` ${errors?.length ? "!bg-red-50" : ""} ${s.input.className} `}
      />
      {errors?.length && <Text className="text-red-500 -mt-4">{errors[0]}</Text>}
      </View>
    </View>
  );
}
