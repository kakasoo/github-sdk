import { tags } from "typia";

import { classroom } from "./classroom";
import { simple_minus_classroom_minus_repository } from "./simple_minus_classroom_minus_repository";

/**
 * A GitHub Classroom assignment
 *
 * @title Classroom Assignment
 */
export type classroom_minus_assignment = {
  /**
   * Unique identifier of the repository.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * Whether an accepted assignment creates a public repository.
   */
  public_repo: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Assignment title.
   */
  title: string &
    tags.JsonSchemaPlugin<{
      example: "Intro to Binaries";
    }>;
  /**
   * Whether it's a group assignment or individual assignment.
   */
  type: "individual" | "group";
  /**
   * The link that a student can use to accept the assignment.
   */
  invite_link: string &
    tags.JsonSchemaPlugin<{
      example: "https://classroom.github.com/a/Lx7jiUgx";
    }>;
  /**
   * Whether the invitation link is enabled. Visiting an enabled invitation link will accept the assignment.
   */
  invitations_enabled: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Sluggified name of the assignment.
   */
  slug: string &
    tags.JsonSchemaPlugin<{
      example: "intro-to-binaries";
    }>;
  /**
   * Whether students are admins on created repository when a student accepts the assignment.
   */
  students_are_repo_admins: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether feedback pull request will be created when a student accepts the assignment.
   */
  feedback_pull_requests_enabled: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * The maximum allowable teams for the assignment.
   */
  max_teams:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 0;
        }>)
    | null;
  /**
   * The maximum allowable members per team.
   */
  max_members:
    | (number &
        tags.Type<"int32"> &
        tags.JsonSchemaPlugin<{
          example: 0;
        }>)
    | null;
  /**
   * The selected editor for the assignment.
   */
  editor: string &
    tags.JsonSchemaPlugin<{
      example: "codespaces";
    }>;
  /**
   * The number of students that have accepted the assignment.
   */
  accepted: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 25;
    }>;
  /**
   * The number of students that have submitted the assignment.
   */
  submitted: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 10;
    }>;
  /**
   * The number of students that have passed the assignment.
   */
  passing: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 10;
    }>;
  /**
   * The programming language used in the assignment.
   */
  language: string &
    tags.JsonSchemaPlugin<{
      example: "elixir";
    }>;
  /**
   * The time at which the assignment is due.
   */
  deadline:
    | (string &
        tags.Format<"date-time"> &
        tags.JsonSchemaPlugin<{
          example: "2011-01-26T19:06:43Z";
        }>)
    | null;
  starter_code_repository: simple_minus_classroom_minus_repository;
  classroom: classroom;
};
