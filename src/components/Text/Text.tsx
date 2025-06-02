import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

interface TextProps extends RNTextProps {
    preset?: TextVariants;
}

export function Text({children, preset = 'paragraphMedium', style, ...rest}: TextProps){
    return (
        <RNText 
            style={[$fontSizes[preset], style]} 
            {...rest}
        >
            {children}
        </RNText>);
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

const $fontSizes: Record<TextVariants, TextStyle> = {
    headingLarge: { fontSize: 32, lineHeight: 38 },
    headingMedium: { fontSize: 22, lineHeight: 26 },
    headingSmall: { fontSize: 18, lineHeight: 23 },
    paragraphLarge: { fontSize: 18, lineHeight: 25 },
    paragraphMedium: { fontSize: 16, lineHeight: 22 },
    paragraphSmall: { fontSize: 14, lineHeight: 20 },
    paragraphCaption: { fontSize: 12, lineHeight: 17 },
    paragraphCaptionSmall: { fontSize: 10, lineHeight: 14 },
}