import api from "@kakasoo/github-sdk";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_users_docker_conflicts_getByUsername(
  connection: api.IConnection,
) {
  const output: packages[] =
    await api.functional.users.docker.conflicts.getByUsername(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
