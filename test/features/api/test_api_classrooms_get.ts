import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { simple_minus_classroom } from "@ORGANIZATION/PROJECT-api/lib/structures/simple_minus_classroom";

export async function test_api_classrooms_get(connection: api.IConnection) {
  const output: simple_minus_classroom[] =
    await api.functional.classrooms.get(connection);
  typia.assert(output);
}
