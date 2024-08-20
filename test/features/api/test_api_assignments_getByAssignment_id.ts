import api from "@kakasoo/github-sdk";
import { classroom_minus_assignment } from "@kakasoo/github-sdk/lib/structures/classroom_minus_assignment";
import typia from "typia";

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
