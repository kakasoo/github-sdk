import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { installation_minus_token } from "@kakasoo/github-sdk/lib/structures/installation_minus_token";
import typia from "typia";

export async function test_api_app_installations_access_tokens_postByInstallation_id(
  connection: api.IConnection,
) {
  const output: installation_minus_token =
    await api.functional.app.installations.access_tokens.postByInstallation_id(
      connection,
      typia.random<string>(),
      typia.random<body>(),
    );
  typia.assert(output);
}
