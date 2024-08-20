import { tags } from "typia";

/**
 * Status Check Policy
 *
 * @title Status Check Policy
 */
export type status_minus_check_minus_policy = {
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks";
    }>;
  strict: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  contexts: string[] &
    tags.JsonSchemaPlugin<{
      example: ["continuous-integration/travis-ci"];
    }>;
  checks: {
    context: string &
      tags.JsonSchemaPlugin<{
        example: "continuous-integration/travis-ci";
      }>;
    app_id: (number & tags.Type<"int32">) | null;
  }[];
  contexts_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/octocat/Hello-World/branches/master/protection/required_status_checks/contexts";
    }>;
};
