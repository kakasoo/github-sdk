import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";
import { reaction_minus_rollup } from "./reaction_minus_rollup";

/**
 * A team discussion is a persistent record of a free-form conversation within a team.
 *
 * @title Team Discussion
 */
export type team_minus_discussion = {
  author: nullable_minus_simple_minus_user;
  /**
   * The main text of the discussion.
   */
  body: string &
    tags.JsonSchemaPlugin<{
      example: "Please suggest improvements to our workflow in comments.";
    }>;
  body_html: string &
    tags.JsonSchemaPlugin<{
      example: "<p>Hi! This is an area for us to collaborate as a team</p>";
    }>;
  /**
   * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
   */
  body_version: string &
    tags.JsonSchemaPlugin<{
      example: "0307116bbf7ced493b8d8a346c650b71";
    }>;
  comments_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 0;
    }>;
  comments_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/2343027/discussions/1/comments";
    }>;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2018-01-25T18:56:31Z";
    }>;
  last_edited_at: (string & tags.Format<"date-time">) | null;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/orgs/github/teams/justice-league/discussions/1";
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDE0OlRlYW1EaXNjdXNzaW9uMQ==";
    }>;
  /**
   * The unique sequence number of a team discussion.
   */
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * Whether or not this discussion should be pinned for easy retrieval.
   */
  pinned: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether or not this discussion should be restricted to team members and organization owners.
   */
  private: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  team_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/2343027";
    }>;
  /**
   * The title of the discussion.
   */
  title: string &
    tags.JsonSchemaPlugin<{
      example: "How can we improve our workflow?";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2018-01-25T18:56:31Z";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/organizations/1/team/2343027/discussions/1";
    }>;
  reactions?: reaction_minus_rollup;
};
