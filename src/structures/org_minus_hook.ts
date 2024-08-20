import { tags } from "typia";

/**
 * Org Hook
 *
 * @title Org Hook
 */
export type org_minus_hook = {
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/octocat/hooks/1";
    }>;
  ping_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/octocat/hooks/1/pings";
    }>;
  deliveries_url?: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/orgs/octocat/hooks/1/deliveries";
    }>;
  name: string &
    tags.JsonSchemaPlugin<{
      example: "web";
    }>;
  events: string[] &
    tags.JsonSchemaPlugin<{
      example: ["push", "pull_request"];
    }>;
  active: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  config: {
    url?: string &
      tags.JsonSchemaPlugin<{
        example: '"http://example.com/2"';
      }>;
    insecure_ssl?: string &
      tags.JsonSchemaPlugin<{
        example: '"0"';
      }>;
    content_type?: string &
      tags.JsonSchemaPlugin<{
        example: '"form"';
      }>;
    secret?: string &
      tags.JsonSchemaPlugin<{
        example: '"********"';
      }>;
  };
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-09-06T20:39:23Z";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-09-06T17:26:27Z";
    }>;
  type: string;
};
