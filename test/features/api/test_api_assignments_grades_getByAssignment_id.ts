import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { classroom_minus_assignment_minus_grade } from "@ORGANIZATION/PROJECT-api/lib/structures/classroom_minus_assignment_minus_grade";

export async function test_api_assignments_grades_getByAssignment_id(
  connection: api.IConnection,
) {
  const output: classroom_minus_assignment_minus_grade[] =
    await api.functional.assignments.grades.getByAssignment_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
