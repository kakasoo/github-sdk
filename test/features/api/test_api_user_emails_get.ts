import api from "@kakasoo/github-sdk";
import { email } from "@kakasoo/github-sdk/lib/structures/email";
import typia from "typia";

export async function test_api_user_emails_get(connection: api.IConnection) {
  const output: email[] = await api.functional.user.emails.get(connection);
  typia.assert(output);
}
