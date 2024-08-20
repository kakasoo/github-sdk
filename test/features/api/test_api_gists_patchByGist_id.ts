import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { gist_minus_simple } from "@kakasoo/github-sdk/lib/structures/gist_minus_simple";
import typia from "typia";

export async function test_api_gists_patchByGist_id(
  connection: api.IConnection,
) {
  const output: gist_minus_simple = await api.functional.gists.patchByGist_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
