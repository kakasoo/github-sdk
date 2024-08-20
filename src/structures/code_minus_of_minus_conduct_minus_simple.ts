import { tags } from "typia";

/**
 * Code of Conduct Simple
 *
 * @title Code Of Conduct Simple
 */
export type code_minus_of_minus_conduct_minus_simple = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/github/docs/community/code_of_conduct";
    }>;
  key: string &
    tags.JsonSchemaPlugin<{
      example: "citizen_code_of_conduct";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Citizen Code of Conduct";
    }>;
  html_url:
    | (string &
        tags.Format<"uri"> &
        tags.JsonSchemaPlugin<{
          example: "https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md";
        }>)
    | null;
};
