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
  mdiChartMultiple,
} from "@mdi/js";

export default [
  {
    permissions: [],
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    permissions: ["engineer"],
    to: "/channel",
    label: "Channel",
    icon: mdiBookCogOutline,
  },
  {
    permissions: ["engineer"],
    to: "/mapping",
    label: "Mapping",
    icon: mdiLanConnect,
  },
  {
    permissions: ["engineer", "operator", "viewer", "cloud"],
    to: "/chartViewer",
    label: "Chart Viewer",
    icon: mdiChartMultiple,
  },
  {
    permissions: ["engineer", "operator", "viewer", "cloud"],
    label: "Logs",
    icon: mdiViewList,
    menu: [
      {
        permissions: [],
        to: "/sessionLog",
        label: "Session Log",
      },
      {
        permissions: [],
        to: "/serviceLog",
        label: " Service Log",
      },
    ],
  },

  {
    permissions: ["engineer", "operator", "viewer", "cloud"],
    to: "/forwarder",
    label: "Forwarder",
    icon: mdiArrangeBringForward,
  },

  {
    permissions: [],
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    permissions: ["admin", "engineer"],
    label: "Settings",
    icon: mdiCogOutline,
    menu: [
      {
        permissions: [ "admin","engineer"],
        to: "/settings",
        label: "System",
      },
      {
        permissions: ["admin","engineer"],
        to: "/import-export",
        label: "Import/Export",
      },
    ],
  },
  {
    permissions: [],
    label: "Information",
    icon: mdiInformationOutline,
    menu: [
      {
        permissions: [],
        to: "/About",
        label: "About",
      },
      {
        permissions: [],
        to: "/license",
        label: "License",
      },
    ],
  },
];
