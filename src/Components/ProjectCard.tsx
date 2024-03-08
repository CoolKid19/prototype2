import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  name: string;
  serialId: string;
  region: string;
}

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: "auto",
  marginTop: 20,
});

const ProjectCard: React.FC<ProjectCardProps> = ({ name, serialId, region }) => {

  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => {navigate(`/${serialId}`)}}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Serial No: {serialId}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {region}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;
