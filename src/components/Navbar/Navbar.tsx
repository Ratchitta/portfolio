import { Fragment, useState } from "react";
import { Box, Container } from "@mui/material";

import ExpandIcon from "@mui/icons-material/ExpandMoreRounded";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { Flex, Link, Text } from "components/";
import { Button, Menu, MenuItem, Icon } from "@mui/material";
import { projects } from "./tabs";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [projectsMenuOpen, setProjectsMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClickProjectsMenu = (event: React.MouseEvent<HTMLElement>) => {
    handleOpenProjectsMenu(event);
    setProjectsMenuOpen(!projectsMenuOpen);
  };

  const handleCloseProjectsMenu = () => {
    setProjectsMenuOpen(false);
    setAnchorEl(null);
  };

  const handleOpenProjectsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectProjectCategory = (url: string) => {
    navigate(url);
    handleCloseProjectsMenu();
  };

  return (
    <Box bgcolor={"white"}>
      <Container>
        <Flex justifyContent={"space-between"} my={3}>
          <Text
            sx={{
              fontFamily: "Caveat",
              fontSize: "24px",
            }}
          >
            Ratchitta Panya-ngam
          </Text>
          <Flex gap={6}>
            <Link variant="body2" to={"/"}>
              Home
            </Link>
            <Link variant="body2" to={"timeline"}>
              Timeline
            </Link>
            <Button
              onClick={handleClickProjectsMenu}
              endIcon={<ExpandIcon color="primary" />}
              variant="text"
              sx={{
                textTransform: "none",
                color: "black",
                fontSize: "16px",
              }}
            >
              Projects
            </Button>
            <Menu
              open={projectsMenuOpen}
              onClose={handleCloseProjectsMenu}
              anchorEl={anchorEl}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              sx={{
                "& .MuiMenu-paper": {
                  borderRadius: "12px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              {projects.map((project) => (
                <MenuItem
                  onClick={() => handleSelectProjectCategory(project.url)}
                  key={project.name}
                >
                  <Flex gap={1}>
                    <Icon component={project.icon} sx={{ color: "grey.600" }} />
                    <Text variant="body2">{project.name}</Text>
                  </Flex>
                </MenuItem>
              ))}
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
