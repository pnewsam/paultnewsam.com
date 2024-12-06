import { groupBy, keyBy } from "@/utils/array";

import { dsaPages } from "./dsaPages";
import { systemDesignPages } from "./systemDesignPages";
import { userInterfacePages } from "./userInterfacePages";

export const pages = [...systemDesignPages, ...dsaPages, ...userInterfacePages];

export const pagesBySubject = groupBy(pages, "subject");

export const pagesByPath = keyBy(pages, "path");
