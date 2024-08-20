import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { deploy_minus_key } from "@kakasoo/github-sdk/lib/structures/deploy_minus_key";
import typia from "typia";

export async function test_api_repos_keys_postByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: deploy_minus_key =
    await api.functional.repos.keys.postByOwnerAndRepo(
      connection,
      typia.random<string>(),
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
