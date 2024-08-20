import { tags } from "typia";

import { simple_minus_classroom_minus_assignment } from "./simple_minus_classroom_minus_assignment";
import { simple_minus_classroom_minus_repository } from "./simple_minus_classroom_minus_repository";
import { simple_minus_classroom_minus_user } from "./simple_minus_classroom_minus_user";

/**
 * A GitHub Classroom accepted assignment
 *
 * @title Classroom Accepted Assignment
 */
export type classroom_minus_accepted_minus_assignment = {
  /**
   * Unique identifier of the repository.
   */
  id: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 42;
    }>;
  /**
   * Whether an accepted assignment has been submitted.
   */
  submitted: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Whether a submission passed.
   */
  passing: boolean &
    tags.JsonSchemaPlugin<{
      example: true;
    }>;
  /**
   * Count of student commits.
   */
  commit_count: number &
    tags.Type<"int32"> &
    tags.JsonSchemaPlugin<{
      example: 5;
    }>;
  /**
   * Most recent grade.
   */
  grade: string &
    tags.JsonSchemaPlugin<{
      example: "10/10";
    }>;
  students: simple_minus_classroom_minus_user[];
  repository: simple_minus_classroom_minus_repository;
  assignment: simple_minus_classroom_minus_assignment;
};
