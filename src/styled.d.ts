import "styled-components";
import { LightTheme, DarkTheme } from './theme';

declare module "styled-components" {
export interface DefaultTheme {
        textColor: string;
        bgColor: string;
        btnColor : string;
    }

export interface DarkTheme {
        textColor: string;
        bgColor: string;
        btnColor: string;
    }

export interface LightTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
}
}


