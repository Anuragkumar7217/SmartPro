import {
  LayoutDashboard,
  FileText,
  Building2,
  ClipboardList,
  ReceiptText,
  ShoppingCart,
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

  [ROLES.PURCHASE_TEAM]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Purchase Requests",
      to: "/purchase-requests",
      icon: FileText,
    },
    {
      label: "Vendors",
      to: "/vendors",
      icon: Building2,
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

  [ROLES.MANAGER]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Purchase Requests",
      to: "/purchase-requests",
      icon: FileText,
    },
  ],

  [ROLES.ADMIN]: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Purchase Requests",
      to: "/purchase-requests",
      icon: FileText,
    },
    {
      label: "Vendors",
      to: "/vendors",
      icon: Building2,
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