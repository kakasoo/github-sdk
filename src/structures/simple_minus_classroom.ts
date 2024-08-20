import { tags } from "typia";

/**
 * A GitHub Classroom classroom
 *
 * @title Simple Classroom
 */
export type simple_minus_classroom = {
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
   * Returns whether classroom is archived or not.
   */
  archived: boolean &
    tags.JsonSchemaPlugin<{
      example: false;
    }>;
  /**
   * The url of the classroom on GitHub Classroom.
   */
  url: string &
    tags.JsonSchemaPlugin<{
      example: "https://classroom.github.com/classrooms/1-programming-elixir";
    }>;
};
