import api from "@ORGANIZATION/PROJECT-api";
import typia from "typia";

import { email } from "@ORGANIZATION/PROJECT-api/lib/structures/email";

export async function test_api_user_emails_get(connection: api.IConnection) {
  const output: email[] = await api.functional.user.emails.get(connection);
  typia.assert(output);
}
