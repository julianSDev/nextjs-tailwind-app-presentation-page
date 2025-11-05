import React from "react";
import { Typography, Card, Avatar } from "@mui/material";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card className="items-center text-center">
      <div>
        <Avatar src={img} className="mb-3"/>
        <Typography variant="h6" color="blue-gray">
          {client}
        </Typography>
        <Typography className="mb-3 font-medium !text-gray-700">
          {title}
        </Typography>
        <Typography className="mb-5 font-normal !text-gray-500">
          &quot;{feedback}&quot;
        </Typography>
      </div>
    </Card>
  );
}

export default TestimonialCard;