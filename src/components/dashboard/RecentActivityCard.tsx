import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

const RecentActivityCard = (props: Props) => {
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Recent activities</CardTitle>
        <CardDescription>You have played x number of games</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[580px]">Histories</CardContent>
    </Card>
  );
};

export default RecentActivityCard;
