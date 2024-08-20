import api from "@kakasoo/github-sdk";
import { body } from "@kakasoo/github-sdk/lib/structures/body";
import { email } from "@kakasoo/github-sdk/lib/structures/email";
import typia from "typia";

export async function test_api_user_email_visibility_patch(
  connection: api.IConnection,
) {
  const output: email[] = await api.functional.user.email.visibility.patch(
    connection,
    typia.random<body>(),
  );
  typia.assert(output);
}
