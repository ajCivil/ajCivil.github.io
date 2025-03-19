"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      repo="ajCivil/ajCivil.github.io"
      repoId="R_kgDOOJsvfA"
      category="Announcements"
      categoryId="DIC_kwDOOJsvfM4CoNrV"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="zh-CN"
    />
  );
}
