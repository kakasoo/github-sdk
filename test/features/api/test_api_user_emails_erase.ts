import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import typia from "typia";

export async function test_api_user_emails_erase(connection: api.IConnection) {
  const output = await api.functional.user.emails.erase(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
