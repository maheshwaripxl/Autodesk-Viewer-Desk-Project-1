import React from 'react'
import { PiFolderOpen } from "react-icons/pi";
import { AiOutlineHistory } from "react-icons/ai";

function ListComponent() {
  return (
    <div className='text-lg text-center mt-9'>
      <h5 className='flex items-center gap-4 w-48 ml-3 px-1 mb-1 border rounded-md'><PiFolderOpen/>Client A</h5>
      <h5 className='flex items-center gap-4 w-48 ml-3 px-1 mb-1 border rounded-md'><AiOutlineHistory/>Recent</h5>
    </div>
  )
}

export default ListComponent;



// import { Box, Button, List, ListItem, ListItemButton, ListItemText, Typography, useTheme } from "@mui/material";
// import React from "react";
// import { tokens } from "../theme/theme";
// import { FaCogs, FaFileSignature, FaSignOutAlt, FaStoreAlt, FaUsers } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import { BsGrid1X2Fill, BsInfoCircleFill, BsShieldLockFill } from "react-icons/bs";
// // import { motion } from "framer-motion";
// // import useAuth from "../context/auth";
// // import { useDispatch, useSelector } from "react-redux";
// // import { changeSidebar } from "../redux/sidebarSlice";

// const AdminSidebar = ({ isMobileView }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const location = useLocation();

//   // Redux State for Sidebar
//   // const MenuState = useSelector((state) => state.sidebar);

//   // const dispatch = useDispatch();

//   // const { logout } = useAuth();

//   const menu = [
//     {
//       title: "Menu",
//       type: "heading",
//     },
//     {
//       title: "Dashboard",
//       icon: <BsGrid1X2Fill fontSize={18} />,
//       link: "/",
//       type: "menu",
//     },
//     {
//       title: "Management",
//       type: "heading",
//     },
//     {
//       title: "Agencies",
//       icon: <FaStoreAlt fontSize={18} />,
//       link: "/orders",
//       type: "menu",
//     },
//     {
//       title: "Users",
//       icon: <FaUsers fontSize={20} />,
//       link: "/customers",
//       type: "menu",
//     },
//     {
//       title: "More",
//       type: "heading",
//     },
//     {
//       title: "About Us",
//       icon: <BsInfoCircleFill fontSize={20} />,
//       link: "/customers",
//       type: "menu",
//     },

//     {
//       title: "Terms & Conditions",
//       icon: <FaFileSignature fontSize={20} />,
//       link: "/customers",
//       type: "menu",
//     },
//     {
//       title: "Privacy Policy",
//       icon: <BsShieldLockFill fontSize={20} />,
//       link: "/customers",
//       type: "menu",
//     },
//     {
//       title: "Settings",
//       icon: <FaCogs fontSize={20} />,
//       link: "/customers",
//       type: "menu",
//     },
//   ];

//   return (
//     <Box
//       sx={{ width: "100%", height: "100%" }}
//       className={`p-3 relative overflow-hidden ${
//         isMobileView ? "min-w-[280px]" : ""
//       }`}
//     >
//       <List className="">
//         {menu.map((item, index) => {
//           return item.type === "heading"  
//           //  (
//           //   <motion.div
//           //     initial={{ opacity: 0 }}
//           //     animate={{ opacity: 1 }}
//           //     transition={{ duration: 0.5 }}
//           //     key={index}
//           //   >
//           //     <p
//           //       className={`px-2 text-accentBerry text-sm font-bold ${
//           //         index !== 0 && "mt-4"
//           //       }`}
//           //     >
//           //       {item.title}
//           //     </p>
//           //   </motion.div>
//           // ) :
//            (
//             item.type === "menu" && (
//               <Link to={item.link} key={index} className="no-underline">
//                 <ListItem
//                   disablePadding
//                   sx={{ my: 0.5 }}
//                   // onClick={() =>
//                   //   isMobileView && dispatch(changeSidebar(!MenuState))
//                   // }
//                 >
//                   <ListItemButton
//                     // className={!MenuState ? `flex !justify-center` : ""}
//                     sx={{
//                       p: 0,
//                       // px: MenuState ? 1 : 2,
//                       // py: MenuState ? 1 : 2,
//                       borderRadius: 2,
//                       color: location.pathname === item.link ? "black" : "#444",
//                       backgroundColor:
//                         location.pathname === item.link
//                           ? colors.primary[900]
//                           : "",
//                       "&:hover": {
//                         background: colors.primary[600],
//                         color: "white",
//                       },
//                       transition: "all .5s",
//                     }}
//                   >
//                     <span className="min-w-[20px]">{item.icon}</span>
//                     {/* {MenuState && (
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                       >
//                         <ListItemText
//                           primary={
//                             <Typography
//                               variant={"body2"}
//                               color="inherit"
//                               fontWeight={600}
//                               marginLeft={2}
//                               style={{
//                                 textDecoration: "none",
//                               }}
//                             >
//                               {item.title}
//                             </Typography>
//                           }
//                         />
//                       </motion.div>
//                     )} */}
//                   </ListItemButton>
//                 </ListItem>
//               </Link>
//             )
//           );
//         })}
//       </List>
//       <div className="absolute bottom-0 right-0 w-full bg-accentBerry text-white">
//         <Button
//           sx={{ color: "white" }}
//           fullWidth
//           size="large"
//           // className={MenuState ? "gap-2 !capitalize !font-medium" : "p-3"}
//           // onClick={() => logout()}
//         >
//           {/* <FaSignOutAlt /> {MenuState ? "SignOut" : ""} */}
//         </Button>
//       </div>
//     </Box>
//   );
// };

// export default AdminSidebar;

