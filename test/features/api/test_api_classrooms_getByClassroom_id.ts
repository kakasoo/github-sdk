import api from "@kakasoo/github-sdk";
import { classroom } from "@kakasoo/github-sdk/lib/structures/classroom";
import typia from "typia";

export async function test_api_classrooms_getByClassroom_id(
  connection: api.IConnection,
) {
  const output: classroom = await api.functional.classrooms.getByClassroom_id(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
}
