import React from "react";

const Emoji = (props: { label: string; symbol: string }) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    dangerouslySetInnerHTML={{
      __html: props.symbol,
    }}
  />
);
export default Emoji;
