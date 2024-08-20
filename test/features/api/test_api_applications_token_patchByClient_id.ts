import api from "@kakasoo/github-sdk";
import { authorization } from "@kakasoo/github-sdk/lib/structures/authorization";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_applications_token_patchByClient_id(
  connection: api.IConnection,
) {
  const output: authorization =
    await api.functional.applications.token.patchByClient_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
