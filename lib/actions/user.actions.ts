'use server';

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { parse } from "path";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {
    // Your sign-in logic here
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData 
     try {
    const { account } = await createAdminClient();

 const newUserAccount = await account.create(ID.unique(), email,password,`${firstName} ${lastName}` );
  
 const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUserAccount);
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  
