// Import: Dependencies
import React from "react";

// Import: Styling
import "./SidebarRow.styles.scss";

// Import: Material Core
import { Avatar } from "@material-ui/core";

// UI: SidebarRow
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="SidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

// Export: SidebarRow
export default SidebarRow;
