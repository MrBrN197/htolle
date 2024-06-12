import {  createContext } from "react";
import { ApolloClient , NormalizedCacheObject} from "@apollo/client";
  

export const GraphQlContext = createContext<ApolloClient<NormalizedCacheObject> | null>(null);


