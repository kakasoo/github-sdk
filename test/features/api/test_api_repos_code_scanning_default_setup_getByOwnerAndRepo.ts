import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_default_minus_setup } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_default_minus_setup";
import typia from "typia";

export async function test_api_repos_code_scanning_default_setup_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: code_minus_scanning_minus_default_minus_setup =
    await api.functional.repos.code_scanning.default_setup.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
