import { tags } from "typia";

/**
 * Social media account
 *
 * @title Social account
 */
export type social_minus_account = {
  provider: string &
    tags.JsonSchemaPlugin<{
      example: "linkedin";
    }>;
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://www.linkedin.com/company/github/";
    }>;
};
