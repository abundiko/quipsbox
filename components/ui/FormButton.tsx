import { View, Text, PressableProps, Pressable, Image } from 'react-native'
import React from 'react'

export type FormButtonProps = PressableProps & {
    children: React.ReactNode | string,
    childrenClassName?: string,
    loading?: boolean,
}

export default function FormButton(
    {children,
    childrenClassName,
    loading = false,
    ...props}: FormButtonProps
) {
  return (
    <Pressable {...props}>
        {
            loading ? <Image source={require("../../assets/images/loading.gif")} className="h-6 w-6"  /> :
            (typeof children === "string" ? (
                <Text className={`${childrenClassName}`}>
                    {children}
                </Text>
            ) : children)
        }
      </Pressable>
  )
}