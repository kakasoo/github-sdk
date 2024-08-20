import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

export async function test_api_repos_pages_putByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output = await api.functional.repos.pages.putByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
    typia.random<any | any | any | any | any>(),
  );
  typia.assert(output);
}
