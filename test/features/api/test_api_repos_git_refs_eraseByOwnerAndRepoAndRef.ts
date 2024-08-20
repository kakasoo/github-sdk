import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_git_refs_eraseByOwnerAndRepoAndRef(
  connection: api.IConnection,
) {
  const output = await api.functional.repos.git.refs.eraseByOwnerAndRepoAndRef(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
