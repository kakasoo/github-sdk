import { tags } from "typia";

import { nullable_minus_simple_minus_user } from "./nullable_minus_simple_minus_user";

/**
 * Projects are a way to organize columns and cards of work.
 *
 * @title Project
 */
export type project = {
  owner_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/repos/api-playground/projects-test";
    }>;
  url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/1002604";
    }>;
  html_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://github.com/api-playground/projects-test/projects/12";
    }>;
  columns_url: string &
    tags.Format<"uri"> &
    tags.JsonSchemaPlugin<{
      example: "https://api.github.com/projects/1002604/columns";
    }>;
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1002604;
    }>;
  node_id: string &
    tags.JsonSchemaPlugin<{
      example: "MDc6UHJvamVjdDEwMDI2MDQ=";
    }>;
  /**
   * Name of the project
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Week One Sprint";
    }>;
  /**
   * Body of the project
   */
  body:
    | (string &
        tags.JsonSchemaPlugin<{
          example: "This project represents the sprint of the first week in January";
        }>)
    | null;
  number: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 1;
    }>;
  /**
   * State of the project; either 'open' or 'closed'
   */
  state: string &
    tags.JsonSchemaPlugin<{
      example: "open";
    }>;
  creator: nullable_minus_simple_minus_user;
  created_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2011-04-10T20:09:31Z";
    }>;
  updated_at: string &
    tags.Format<"date-time"> &
    tags.JsonSchemaPlugin<{
      example: "2014-03-03T18:58:10Z";
    }>;
  /**
   * The baseline permission that all organization members have on this project. Only present if owner is an organization.
   */
  organization_permission?: "read" | "write" | "admin" | "none";
  /**
   * Whether or not this project can be seen by everyone. Only present if owner is an organization.
   */
  private?: boolean;
};
