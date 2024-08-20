import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { classroom } from "@ORGANIZATION/PROJECT-api/lib/structures/classroom";

export async function test_api_classrooms_getByClassroom_id(
  connection: api.IConnection,
) {
  const output: classroom = await api.functional.classrooms.getByClassroom_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
