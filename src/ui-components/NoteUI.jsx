/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Notes } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NoteUI(props) {
  const { notes, overrides, ...rest } = props;
  const myIconOnClick = useDataStoreDeleteAction({
    id: notes?.id,
    model: Notes,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="0.5px SOLID rgba(0,0,0,0.25)"
      borderRadius="5px"
      padding="15.5px 15.5px 15.5px 15.5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NoteUI")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="287px"
        height="336px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "content")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="24px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "header")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={notes?.title}
            {...getOverrideProps(overrides, "T-Shirt")}
          ></Text>
          <Flex
            gap="5px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 28")}
          >
            <Icon
              width="20px"
              height="18.42px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 20,
                height: 18.42108154296875,
              }}
              paths={[
                {
                  d: "M13.9792 2.99041L17.1111 6.23631C17.2431 6.37306 17.2431 6.59617 17.1111 6.73291L9.52778 14.5922L6.30556 14.9628C5.875 15.0132 5.51042 14.6354 5.55903 14.1891L5.91667 10.8497L13.5 2.99041C13.6319 2.85366 13.8472 2.85366 13.9792 2.99041ZM19.6042 2.16634L17.9097 0.410236C17.3819 -0.136745 16.5243 -0.136745 15.9931 0.410236L14.7639 1.68413C14.6319 1.82087 14.6319 2.04398 14.7639 2.18073L17.8958 5.42664C18.0278 5.56338 18.2431 5.56338 18.375 5.42664L19.6042 4.15274C20.1319 3.60216 20.1319 2.71332 19.6042 2.16634L19.6042 2.16634ZM13.3333 12.4546L13.3333 16.118L2.22222 16.118L2.22222 4.60256L10.2014 4.60256C10.3125 4.60256 10.4167 4.55578 10.4965 4.47661L11.8854 3.03719C12.1493 2.7637 11.9618 2.29948 11.5903 2.29948L1.66667 2.29948C0.746528 2.29948 0 3.07317 0 4.02679L0 16.6937C0 17.6474 0.746528 18.4211 1.66667 18.4211L13.8889 18.4211C14.809 18.4211 15.5556 17.6474 15.5556 16.6937L15.5556 11.0152C15.5556 10.6302 15.1076 10.4394 14.8438 10.7093L13.4549 12.1488C13.3785 12.2315 13.3333 12.3395 13.3333 12.4546Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector31472745")}
            ></Icon>
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={() => {
                myIconOnClick();
              }}
              {...getOverrideProps(overrides, "MyIcon")}
            >
              <Icon
                width="14px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
                paths={[
                  {
                    d: "M11 6L11 16L3 16L3 6L11 6ZM9.5 0L4.5 0L3.5 1L0 1L0 3L14 3L14 1L10.5 1L9.5 0ZM13 4L1 4L1 16C1 17.1 1.9 18 3 18L11 18C12.1 18 13 17.1 13 16L13 4Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="12.5%"
                bottom="12.5%"
                left="20.83%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector31472747")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="287px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={notes?.text}
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
