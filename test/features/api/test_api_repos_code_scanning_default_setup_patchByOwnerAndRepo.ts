import api from "@kakasoo/github-sdk";
import { code_minus_scanning_minus_default_minus_setup_minus_update } from "@kakasoo/github-sdk/lib/structures/code_minus_scanning_minus_default_minus_setup_minus_update";
import { empty_minus_object } from "@kakasoo/github-sdk/lib/structures/empty_minus_object";
import typia from "typia";

export async function test_api_repos_code_scanning_default_setup_patchByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: empty_minus_object =
    await api.functional.repos.code_scanning.default_setup.patchByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<code_minus_scanning_minus_default_minus_setup_minus_update>(),
    );
  typia.assert(output);
}
