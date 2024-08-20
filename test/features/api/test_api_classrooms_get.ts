import api from "@kakasoo/github-sdk";
import { simple_minus_classroom } from "@kakasoo/github-sdk/lib/structures/simple_minus_classroom";
import typia from "typia";

export async function test_api_classrooms_get(connection: api.IConnection) {
  const output: simple_minus_classroom[] =
    await api.functional.classrooms.get(connection);
  typia.assert(output);
}
