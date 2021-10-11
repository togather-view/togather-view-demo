import { memo } from "react";

interface Props {
  icon: JSX.Element;
  description: string;
}

function IconWithTooltipComponent({ icon, description }: Props) {
  return (
    <div>
      {icon}
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default memo(IconWithTooltipComponent);
