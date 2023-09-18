import { Text } from "react-native"
import { GStyles } from "~theme"
import { EText, TypographyProps } from "~types"

export const Typography: React.FC<TypographyProps> = ({ 
	kind = EText.MD,
	children = null, 
	style,
	color,
	...otherProps 
}) => {
	return <Text 
		style={[GStyles.text[EText[kind]], color && {color}, style]}
		{...otherProps}
	>
		{children && children}
	</Text>
}