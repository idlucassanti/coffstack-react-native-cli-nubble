import { Text as RNText, TextProps, TextStyle } from 'react-native';

export function Text({children, ...rest}: TextProps){
    return (<RNText style={fontSizes.headingLarge} {...rest}>{children}</RNText>);
}

// variações de texto
type TextVariants = 
    | 'headingLarge' 
    | 'headingMedium' 
    | 'headingSmall' 
    | 'paragraphLarge' 
    | 'paragraphMedium' 
    | 'paragraphSmall'
    | 'paragraphCaption'
    | 'paragraphCaptionSmall';

type FontSizeType = {
    fontSize: number;
    lineHeight: number;
}

const fontSizes: Record<TextVariants, TextStyle> = {
    headingLarge: { fontSize: 32, lineHeight: 38 },
    headingMedium: { fontSize: 22, lineHeight: 26 },
    headingSmall: { fontSize: 18, lineHeight: 23 },
    paragraphLarge: { fontSize: 18, lineHeight: 25 },
    paragraphMedium: { fontSize: 16, lineHeight: 22 },
    paragraphSmall: { fontSize: 14, lineHeight: 20 },
    paragraphCaption: { fontSize: 12, lineHeight: 17 },
    paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
}