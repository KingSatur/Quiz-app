"use client";
import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {};

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const CustomWorldCloud = (props: Props) => {
  const { theme } = useTheme();
  return (
    <>
      <D3WordCloud
        height={550}
        font={"Times"}
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme === "dark" ? "white" : "dark"}
        data={[
          { text: "Angular", value: 1 },
          { text: "React", value: 2 },
          { text: "Vuejs", value: 3 },
          { text: "Svelte", value: 4 },
          { text: "Rust", value: 5 },
        ]}
      />
    </>
  );
};

export default CustomWorldCloud;
