import { tags } from "typia";

import { link_minus_with_minus_type } from "./link_minus_with_minus_type";

/**
 * Feed
 *
 * @title Feed
 */
export type feed = {
  timeline_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/timeline";
    }>;
  user_url: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/{user}";
    }>;
  current_user_public_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat";
    }>;
  current_user_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat.private?token=abc123";
    }>;
  current_user_actor_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat.private.actor?token=abc123";
    }>;
  current_user_organization_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/octocat-org";
    }>;
  current_user_organization_urls?: (string & tags.Format<"uri">)[] &
    tags.JsonSchemaPlugin<{
      example: [
        "https://github.com/organizations/github/octocat.private.atom?token=abc123",
      ];
    }>;
  security_advisories_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/security-advisories";
    }>;
  /**
   * A feed of discussions for a given repository.
   */
  repository_discussions_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/{user}/{repo}/discussions";
    }>;
  /**
   * A feed of discussions for a given repository and category.
   */
  repository_discussions_category_url?: string &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/{user}/{repo}/discussions/categories/{category}";
    }>;
  _links: {
    timeline: link_minus_with_minus_type;
    user: link_minus_with_minus_type;
    security_advisories?: link_minus_with_minus_type;
    current_user?: link_minus_with_minus_type;
    current_user_public?: link_minus_with_minus_type;
    current_user_actor?: link_minus_with_minus_type;
    current_user_organization?: link_minus_with_minus_type;
    current_user_organizations?: link_minus_with_minus_type[];
    repository_discussions?: link_minus_with_minus_type;
    repository_discussions_category?: link_minus_with_minus_type;
  };
};
