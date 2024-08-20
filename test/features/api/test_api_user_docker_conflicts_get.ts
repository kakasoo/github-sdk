import api from "@kakasoo/github-sdk";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_user_docker_conflicts_get(
  connection: api.IConnection,
) {
  const output: packages[] =
    await api.functional.user.docker.conflicts.get(connection);
  typia.assert(output);
}
