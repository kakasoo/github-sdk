import { tags } from "typia";

/**
 * Page Build Status
 *
 * @title Page Build Status
 */
export type page_minus_build_minus_status = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/hello-world/pages/builds/latest";
    }>;
  status: string &
    tags.JsonSchemaPlugin<{
      example: "queued";
    }>;
};
