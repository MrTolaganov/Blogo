import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { useState } from "react";
import { navItems } from "../../config/constants";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
}

export default function Navbar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "1.2rem",
        }}
      >
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          <FormatBoldIcon fontSize="large" sx={{ color: "white" }} />
          <Typography variant="h6" marginLeft={"-.5rem"}>
            logo
          </Typography>
        </Box>
        <CloseIcon sx={{ cursor: "pointer" }} />
      </Box>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem
            key={item.route}
            disablePadding
            onClick={() => router.push(item.route)}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box height={"10vh"} sx={{ display: "flex" }}>
      <AppBar
        sx={{ height: "10vh", backgroundColor: "#141414" }}
        component={"nav"}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              my: 2,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              cursor: "pointer",
              flexGrow: 1,
            }}
            onClick={() => router.push("/")}
          >
            <FormatBoldIcon fontSize="large" color="inherit" />
            <Typography variant="h6" marginLeft={"-.5rem"}>
              logo
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(item => (
              <Button
                key={item.route}
                sx={{ color: "#fff" }}
                onClick={() => router.push(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
