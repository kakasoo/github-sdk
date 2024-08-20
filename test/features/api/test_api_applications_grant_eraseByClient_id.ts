import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_applications_grant_eraseByClient_id(
  connection: api.IConnection,
) {
  const output = await api.functional.applications.grant.eraseByClient_id(
    connection,
    typia.random<string>(),
    typia.random<body>(),
  );
  typia.assert(output);
}
