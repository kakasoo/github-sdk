import api from "@kakasoo/github-sdk";
import { license_minus_content } from "@kakasoo/github-sdk/lib/structures/license_minus_content";
import typia from "typia";

export async function test_api_repos_license_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: license_minus_content =
    await api.functional.repos.license.getByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
