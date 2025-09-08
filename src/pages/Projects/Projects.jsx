import React, { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";
import GradientDiv from "../../components/ui/GradientDiv/GradientDiv";
import { projects } from "../../config/projects";
import EmphasisText from "../../components/ui/GradientDiv/Emphasis/EmphasisText";
import { Tabs, Tab, Select, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function Projects() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get("tab") || "all";
  const navigate = useNavigate();

  const expRef = useRef(null);
  const [expStyle, setExpStyle] = useState({});

  const handleMoreClick = (projectName) => {
    // Convert project name to URL-friendly format if needed
    const slug = projectName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/projects/${slug}`);
  };

  const handleCardMouseEnter = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const container = expRef.current.getBoundingClientRect();

    setExpStyle({
      top: card.top - container.top + "px",
      left: card.left - container.left + "px",
      width: card.width + "px",
      height: card.height + "px",
      opacity: 1,
    });
  };

  const handleCardMouseLeave = () => {
    setExpStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const [filter, setFilter] = useState(defaultTab);
  const handleChange = (event, newValue) => {
    const selectedValue = event?.target ? event.target.value : newValue;
    setFilter(selectedValue);
  };

  const handleTabChange = (event, newValue) => {
    setFilter(newValue);
  };

  // Extract unique company names from config
  const companyNames = [...new Set(projects.projectsArr.map((p) => p.company))];

  // filter projects
  const filteredProjects =
    filter === "all"
      ? projects.projectsArr
      : projects.projectsArr.filter((item) => item.company === filter);

  useEffect(() => {
    // Sync tab if URL changes
    setFilter(defaultTab);
  }, [defaultTab]);

  return (
    <div>
      <GradientDiv
        keywords={projects.keywords}
        gradientStart="#8aff80"
        gradientEnd="#80ffea"
      />
      <div className="inter-body">
        {/* <p>{projects.intro}</p> */}
        {projects.intro.map((part, i) =>
          typeof part === "string" ? (
            part
          ) : (
            <EmphasisText key={i} color={part.color}>
              {part.text}
            </EmphasisText>
          )
        )}
      </div>

      {/* tabs section */}
      {/* 🔹 Tabs/Dropdown Section */}
      <div className="filter-wrapper">
        {/* Mobile: Dropdown */}
        <div className={styles["dropdown-view"]}>
          <Select
            className={styles.customSelect}
            value={filter}
            onChange={handleChange}
            size="small"
            MenuProps={{
              classes: { paper: styles.customMenu }, // for dropdown menu
            }}
            // sx={{
            //   minWidth: 200,
            //   borderRadius: "12px",
            //   color: "#f5f5f5", // text color inside select
            //   border: "1px solid #555", // custom border
            //   backgroundColor: "#1e1e1e", // dark background
            //   "& .MuiOutlinedInput-notchedOutline": {
            //     borderColor: "#666", // default border color
            //   },
            //   "&:hover .MuiOutlinedInput-notchedOutline": {
            //     borderColor: "#aaa", // border on hover
            //   },
            //   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            //     borderColor: "#80ffea", // border when focused
            //   },
            //   ".MuiSelect-icon": {
            //     color: "#f5f5f5", // dropdown arrow color
            //   },
            // }}
            // style={{ minWidth: "200px", borderRadius: "12px" }}
            // MenuProps={{
            //   classes: { paper: styles.customMenu }, // for dropdown menu
            // }}
          >
            <MenuItem value="all">All Projects</MenuItem>
            {companyNames.map((company, idx) => (
              <MenuItem key={idx} value={company}>
                {company}
              </MenuItem>
            ))}
            {/* <MenuItem value="all">All Projects</MenuItem>
            <MenuItem value="INFOBELL IT SOLUTIONS PVT LTD">
              INFOBELL IT SOLUTIONS PVT LTD
            </MenuItem>
            <MenuItem value="LIQUIDLAB INFOSYSTEMS">
              LIQUIDLAB INFOSYSTEMS
            </MenuItem> */}
          </Select>
        </div>

        {/* Desktop: Tabs */}
        <div className={styles["tabs-view"]}>
          <Tabs
            value={filter}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            className={styles.customTabs}
            // TabIndicatorProps={{ className: styles.customIndicator }}
          >
            <Tab label="All Projects" value="all" />
            {companyNames.map((company, idx) => (
              <Tab key={idx} label={company} value={company} />
            ))}
            {/* <Tab label="All Projects" value="all" />
            <Tab
              label="INFOBELL IT SOLUTIONS PVT LTD"
              value="INFOBELL IT SOLUTIONS PVT LTD"
            />
            <Tab label="LIQUIDLAB INFOSYSTEMS" value="LIQUIDLAB INFOSYSTEMS" /> */}
          </Tabs>
        </div>
      </div>

      <div className={styles.cards_layout} ref={expRef}>
        {filteredProjects.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.card}
              onClick={() => handleMoreClick(item.name)}
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className={styles.cardContent}>
                <p className={styles.projectName}>{item.name.replace(/\s*\(.*?\)\s*/g, "").split(" ").slice(0, 2).join(" ")}</p>
                <span className={styles.projectCompany}>
                  <strong> {item.company}</strong>
                </span>
                <div className={styles.projectDuration}>{item.duration}</div>
                <p className={styles.projectdescription}>{item.description}</p>
                <span className={styles.moreDetails} onClick={() => handleMoreClick(item.name)}>More →</span>
              </div>
            </div>
          );
        })}
        <span className={styles["card-highlight"]} style={expStyle} />
      </div>
    </div>
  );
}

export default Projects;
