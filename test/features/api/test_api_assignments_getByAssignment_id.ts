import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { classroom_minus_assignment } from "@ORGANIZATION/PROJECT-api/lib/structures/classroom_minus_assignment";

export async function test_api_assignments_getByAssignment_id(
  connection: api.IConnection,
) {
  const output: classroom_minus_assignment =
    await api.functional.assignments.getByAssignment_id(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
