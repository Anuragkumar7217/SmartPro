import {
  LayoutDashboard,
  FileText,
  Building2,
  ClipboardList,
  ReceiptText,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { ROLES } from "./roles";

export const sidebarMenu = {
  [ROLES.EMPLOYEE]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Create Request",
      to: "/purchase-requests/create",
      icon: FileText,
    },
    {
      label: "My Requests",
      to: "/purchase-requests/my",
      icon: FileText,
    },
  ],

  [ROLES.MANAGER]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Pending Requests",
      to: "/purchase-requests/pending",
      icon: FileText,
    },
  ],

  [ROLES.PURCHASE_TEAM]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Vendors",
      to: "/vendors",
      icon: Building2,
    },
    {
      label: "Approved PRs",
      to: "/purchase-requests/approved",
      icon: FileText,
    },
    {
      label: "RFQs",
      to: "/rfqs",
      icon: ClipboardList,
    },
    {
      label: "Quotations",
      to: "/quotations",
      icon: ReceiptText,
    },
    {
      label: "Purchase Orders",
      to: "/purchase-orders",
      icon: ShoppingCart,
    },
  ],

  [ROLES.ADMIN]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "User Management",
      to: "/UserManagement",
      icon: UsersRound,
    },
    {
      label: "RFQs",
      to: "/rfqs",
      icon: ClipboardList,
    },
    {
      label: "Quotations",
      to: "/quotations",
      icon: ReceiptText,
    },
    {
      label: "Purchase Orders",
      to: "/purchase-orders",
      icon: ShoppingCart,
    },
  ],
};