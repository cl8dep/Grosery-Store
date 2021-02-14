import {
  HelpOutline as FAQIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryIcon,
  LocalGroceryStore as GroceryStoreIcon,
  QuestionAnswer as SupportIcon,
} from '@material-ui/icons';
import React from 'react';

const structure = [
  { id: 0, label: "Inicio", link: "/app/dashboard", icon: <HomeIcon /> },
  {
    id: 1,
    label: "Productos",
    link: "/app/products",
    icon: <GroceryStoreIcon />,
  },
  {
    id: 2,
    label: "Órdenes",
    link: "/app/orders",
    icon: <LibraryIcon />,
  },
  { id: 3, type: "divider" },
  { id: 4, type: "title", label: "AYUDA" },
  { id: 5, label: "Soporte", link: "", icon: <SupportIcon /> },
  { id: 6, label: "FAQ", link: "", icon: <FAQIcon /> },
];

export default structure;
