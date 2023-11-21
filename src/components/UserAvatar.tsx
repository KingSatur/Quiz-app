import { User } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { userAgent } from "next/server";
import Image from "next/image";

type Props = {
  user: Pick<User, "name" | "image">;
};

export const UserAvatar = (props: Props) => {
  return (
    <Avatar>
      {props.user?.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={props?.user?.image}
            alt="profile image"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{props?.user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};
