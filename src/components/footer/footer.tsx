import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      padding={"20px"}
      borderTop={"1px solid rgba(255, 255, 255, 0.5)"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#141414",
        color: "white",
      }}
    >
      <Typography>
        &copy; {format(new Date(), "yyyy")} Blogo. All Rights Preserved
      </Typography>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <TelegramIcon sx={{ cursor: "pointer" }} />
        <GitHubIcon sx={{ cursor: "pointer" }} />
        <LinkedInIcon sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
}
