import api from "@kakasoo/github-sdk";
import { event } from "@kakasoo/github-sdk/lib/structures/event";
import typia from "typia";

export async function test_api_users_events_orgs_getByUsernameAndOrg(
  connection: api.IConnection,
) {
  const output: event[] =
    await api.functional.users.events.orgs.getByUsernameAndOrg(
      connection,
      typia.random<string>(),
      typia.random<string>(),
    );
  typia.assert(output);
}
