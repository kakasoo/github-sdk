import { tags } from "typia";

import { nullable_minus_code_minus_of_minus_conduct_minus_simple } from "./nullable_minus_code_minus_of_minus_conduct_minus_simple";
import { nullable_minus_community_minus_health_minus_file } from "./nullable_minus_community_minus_health_minus_file";
import { nullable_minus_license_minus_simple } from "./nullable_minus_license_minus_simple";

/**
 * Community Profile
 *
 * @title Community Profile
 */
export type community_minus_profile = {
  health_percentage: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 100;
    }>;
  description:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "My first repository on GitHub!";
        }>)
    | null;
  documentation:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "example.com";
        }>)
    | null;
  files: {
    code_of_conduct: nullable_minus_code_minus_of_minus_conduct_minus_simple;
    code_of_conduct_file: nullable_minus_community_minus_health_minus_file;
    license: nullable_minus_license_minus_simple;
    contributing: nullable_minus_community_minus_health_minus_file;
    readme: nullable_minus_community_minus_health_minus_file;
    issue_template: nullable_minus_community_minus_health_minus_file;
    pull_request_template: nullable_minus_community_minus_health_minus_file;
  };
  updated_at:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2017-02-28T19:09:29Z";
        }>)
    | null;
  content_reports_enabled?: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
};
