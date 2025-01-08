import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        fontfamily: string;
        colors: {
            primary: string;
            secondary: string;

            background: string;
            text: string;
            textInverted: string;
        },
        size: {
            small: string;
            medium: string;
            large: string;
        }
    }

}