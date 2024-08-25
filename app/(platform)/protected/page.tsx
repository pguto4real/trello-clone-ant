// import { auth, currentUser } from "@clerk/nextjs/server";
// import React from "react";

'use client'

import { useAuth, UserButton, useUser } from "@clerk/nextjs";

const ProtectedPage =  () => {
//   const user = await currentUser();
//   const { userId } = auth();

// const {userId} = useAuth()
// const {user}= useUser()
  return <div>
    {/* User: {user?.firstName}
    UserId: {userId} */}
    <UserButton
    afterSignOutUrl="/"
    />
    </div>;
};

export default ProtectedPage;
