import { tags } from "typia";

/**
 * Grade for a student or groups GitHub Classroom assignment
 *
 * @title Classroom Assignment Grade
 */
export type classroom_minus_assignment_minus_grade = {
  /**
   * Name of the assignment
   */
  assignment_name: string;
  /**
   * URL of the assignment
   */
  assignment_url: string;
  /**
   * URL of the starter code for the assignment
   */
  starter_code_url: string;
  /**
   * GitHub username of the student
   */
  github_username: string;
  /**
   * Roster identifier of the student
   */
  roster_identifier: string;
  /**
   * Name of the student's assignment repository
   */
  student_repository_name: string;
  /**
   * URL of the student's assignment repository
   */
  student_repository_url: string;
  /**
   * Timestamp of the student's assignment submission
   */
  submission_timestamp: string;
  /**
   * Number of points awarded to the student
   */
  points_awarded: number & tags.Type<"int32">;
  /**
   * Number of points available for the assignment
   */
  points_available: number & tags.Type<"int32">;
  /**
   * If a group assignment, name of the group the student is in
   */
  group_name?: string;
};
