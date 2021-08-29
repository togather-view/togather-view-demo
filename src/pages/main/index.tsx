import { memo } from "react";
import LayoutComponent from "@src/components/common/Layout.component";

function MainPage() {
  return (
    <LayoutComponent>
      <div>main page</div>
    </LayoutComponent>
  );
}

export default memo(MainPage);
