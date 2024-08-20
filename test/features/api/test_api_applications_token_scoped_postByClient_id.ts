import api from "@kakasoo/github-sdk";
import { authorization } from "@kakasoo/github-sdk/lib/structures/authorization";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_applications_token_scoped_postByClient_id(
  connection: api.IConnection,
) {
  const output: authorization =
    await api.functional.applications.token.scoped.postByClient_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
