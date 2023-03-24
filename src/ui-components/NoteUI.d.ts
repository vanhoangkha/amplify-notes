/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Notes } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteUIOverridesProps = {
    NoteUI?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    header?: PrimitiveOverrideProps<FlexProps>;
    "T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    Vector31472745?: PrimitiveOverrideProps<IconProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector31472747?: PrimitiveOverrideProps<IconProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NoteUIProps = React.PropsWithChildren<Partial<FlexProps> & {
    notes?: Notes;
} & {
    overrides?: NoteUIOverridesProps | undefined | null;
}>;
export default function NoteUI(props: NoteUIProps): React.ReactElement;
