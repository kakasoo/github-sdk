import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_classroom_minus_assignment } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_classroom_minus_assignment";

export async function test_api_classrooms_assignments_getByClassroom_id(
  connection: api.IConnection,
) {
  const output: simple_minus_classroom_minus_assignment[] =
    await api.functional.classrooms.assignments.getByClassroom_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
