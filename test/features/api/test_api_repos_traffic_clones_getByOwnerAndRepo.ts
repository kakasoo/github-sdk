import api from "@kakasoo/github-sdk";
import { clone_minus_traffic } from "@kakasoo/github-sdk/lib/structures/clone_minus_traffic";
import typia from "typia";

export async function test_api_repos_traffic_clones_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: clone_minus_traffic =
    await api.functional.repos.traffic.clones.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
