import { createContext, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";

const API_URL = Platform.os === "ios" ? "http://192.168.100.10:3000/posts" : "http://localhost:3000/posts";

const PostContext = createContext()
export const usePost = () => useContext(PostContext)