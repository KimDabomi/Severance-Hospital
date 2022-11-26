/**
 * @ File Name: CheckBox.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-26 15:02:00
 * @ Description: material ui 체크박스
 */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ theme }) => ({
  width: 20,
  height: 20,
  background: "white",
  boxShadow: "none",
  border: "1px solid #aaa",
  boxSizing: "border-box",
  borderRadius: 0
}));

const BpCheckedIcon = styled(BpIcon)({
  background: "white url(./img/ico-checkbox-checked.png) no-repeat 45% center",
  backgroundSize: "13px 10px"
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" }
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

export default function CustomizedCheckbox() {
  return (
    <div>
      <BpCheckbox />
    </div>
  );
}
