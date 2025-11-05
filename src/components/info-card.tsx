import React from "react";

import { Typography, Card } from "@mui/material";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card color="transparent">
      <div className="grid px-0">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className=" font-normal">{children}</Typography>
      </div>
    </Card>
  );
}

export default InfoCard;