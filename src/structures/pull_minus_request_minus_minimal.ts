import { tags } from "typia";

/**
 * @title Pull Request Minimal
 */
export type pull_minus_request_minus_minimal = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      format: "int64";
    }>;
  number: number & tags.Type<"int32">;
  url: string;
  head: {
    ref: string;
    sha: string;
    repo: {
      id: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
        }>;
      url: string;
      name: string;
    };
  };
  base: {
    ref: string;
    sha: string;
    repo: {
      id: number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          format: "int64";
        }>;
      url: string;
      name: string;
    };
  };
};
