/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
import NoteUI from "./NoteUI";
export default function PhotoNote(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PhotoNote")}
      {...rest}
    >
      <Image
        width="321px"
        height="307px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "IMG-1054 1")}
      ></Image>
      <NoteUI
        display="flex"
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="0.5px SOLID rgba(0,0,0,0.25)"
        borderRadius="5px"
        padding="15.5px 15.5px 15.5px 15.5px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "PhotoNote31472751")}
      ></NoteUI>
    </Flex>
  );
}
