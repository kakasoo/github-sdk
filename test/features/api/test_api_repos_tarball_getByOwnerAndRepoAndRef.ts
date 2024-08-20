import api from "@kakasoo/github-sdk";
import typia from "typia";

export async function test_api_repos_tarball_getByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output = await api.functional.repos.tarball.getByOwnerAndRepoAndRef(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
