import api from "@kakasoo/github-sdk";
import { simple_minus_classroom_minus_assignment } from "@kakasoo/github-sdk/lib/structures/simple_minus_classroom_minus_assignment";
import typia from "typia";

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
