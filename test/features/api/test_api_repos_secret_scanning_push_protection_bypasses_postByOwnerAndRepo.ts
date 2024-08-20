import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { secret_minus_scanning_minus_push_minus_protection_minus_bypass } from "@kakasoo/github-sdk/lib/structures/secret_minus_scanning_minus_push_minus_protection_minus_bypass";
import typia from "typia";

export async function test_api_repos_secret_scanning_push_protection_bypasses_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: secret_minus_scanning_minus_push_minus_protection_minus_bypass =
    await api.functional.repos.secret_scanning.push_protection_bypasses.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
