// Import: Dependencies
import React from "react";

// Import: Styling
import "./Sidebar.styles.scss";

// Import: Material UI Icons
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

// Import: Components
import SidebarRow from "./SidebarRow/SidebarRow.component";
import { useRadioGroup } from "@material-ui/core";

// UI: Sidebar
function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarRow
        src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        title="Riz Layton"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

// Export: Sidebar
export default Sidebar;
