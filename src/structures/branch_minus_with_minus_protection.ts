import { tags } from "typia";

import { branch_minus_protection } from "./branch_minus_protection";
import { commit } from "./commit";

/**
 * Branch With Protection
 *
 * @title Branch With Protection
 */
export type branch_minus_with_minus_protection = {
  name: string;
  commit: commit;
  _links: {
    html: string;
    self: string & tags.Format<"uri">;
  };
  protected: boolean;
  protection: branch_minus_protection;
  protection_url: string & tags.Format<"uri">;
  pattern?: string &
    tags.JsonSchemaPlugin<{
      example: '"mas*"';
    }>;
  required_approving_review_count?: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
};
