import { View as _View, Text as _Text, ViewProps, TextProps } from "react-native";
import { s } from "./styles";


export function View({className, ...props}: ViewProps) {
  return <_View className={`${s.bgClass} ${className}`} {...props} />;
}
export function View2({className, ...props}: ViewProps) {
  return <_View className={`${s.bg2Class} ${className}`} {...props} />;
}

export function Text({className, ...props}: TextProps) {
  return <_Text className={`${s.textClass} ${className}`} {...props} />;
}
export function TextLight({className, ...props}: TextProps) {
  return <_Text className={`${s.textLightClass} ${className}`} {...props} />;
}

