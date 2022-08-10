import { useState, CSSProperties } from "react";
import { SyncLoader } from "react-spinners";
export const Loader = () => {
    return <SyncLoader
        color={"#4354B0"}
  cssOverride={{
    // display: 'flex',
    maxHeight: 'auto',
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: "center",
    
  }}
 />;
};
