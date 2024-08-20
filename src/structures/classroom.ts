import { tags } from "typia";

import { simple_minus_classroom_minus_organization } from "./simple_minus_classroom_minus_organization";

/**
 * A GitHub Classroom classroom
 *
 * @title Classroom
 */
export type classroom = {
  /**
   * Unique identifier of the classroom.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * The name of the classroom.
   */
  name: string &
    tags.JsonSchemaPlugin<{
      example: "Programming Elixir";
    }>;
  /**
   * Whether classroom is archived.
   */
  archived: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  organization: simple_minus_classroom_minus_organization;
  /**
   * The URL of the classroom on GitHub Classroom.
   */
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://classroom.github.com/classrooms/1-programming-elixir";
    }>;
};
