import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLanConnect,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiInformationOutline,
  mdiPalette,
  mdiBookCogOutline,
  mdiArrangeBringForward,
  mdiVpn,
  mdiSignalCellular2,
  mdiLan,
  mdiCogOutline,
} from "@mdi/js";

export default [
  {
    permissions: ["admin", "engineer"],
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    permissions: ["admin", "engineer"],
    to: "/channel",
    label: "Channel",
    icon: mdiBookCogOutline,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/mapping",
    label: "Mapping",
    icon: mdiLanConnect,
  },
  {
    permissions: ["admin", "engineer"],
    label: "Logs",
    icon: mdiViewList,
    menu: [
      {
        permissions: ["admin", "engineer"],
        to: "/sessionLog",
        label: "Session Log",
      },
      {
        permissions: ["admin", "engineer"],
        to: "/serviceLog",
        label: " Service Log",
      },
    ],
  },

  {
    permissions: ["admin", "engineer"],
    to: "/forwarder",
    label: "Forwarder",
    icon: mdiArrangeBringForward,
  },

  {
    permissions: ["admin", "engineer"],
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    permissions: ["admin", "engineer"],
    label: "Settings",
    icon: mdiCogOutline,
    to: "/settings",
  },
  {
    permissions: ["admin", "engineer"],
    label: "Information",
    icon: mdiInformationOutline,
    menu: [
      {
        permissions: ["admin", "engineer"],
        to: "/About",
        label: "About",
      },
      {
        permissions: ["admin", "engineer"],
        to: "/license",
        label: "License",
      },
    ],
  },
];
