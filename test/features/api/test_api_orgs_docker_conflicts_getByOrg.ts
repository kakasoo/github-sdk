import api from "@kakasoo/github-sdk";
import { packages } from "@kakasoo/github-sdk/lib/structures/package";
import typia from "typia";

export async function test_api_orgs_docker_conflicts_getByOrg(
  connection: api.IConnection,
) {
  const output: packages[] =
    await api.functional.orgs.docker.conflicts.getByOrg(
      connection,
      typia.random<string>(),
    );
  typia.assert(output);
}
