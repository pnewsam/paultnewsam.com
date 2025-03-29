import { groupBy, keyBy } from "@/utils/array";

import { dsaPages } from "./dsaPages";

export const pages = [...dsaPages];

export const pagesBySubject = groupBy(pages, "subject");

export const pagesByPath = keyBy(pages, "path");
