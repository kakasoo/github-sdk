import api from "@kakasoo/github-sdk";
import { label } from "@kakasoo/github-sdk/lib/structures/label";
import typia from "typia";

export async function test_api_repos_labels_getByOwnerAndRepo(
  connection: api.IConnection,
) {
  const output: label[] = await api.functional.repos.labels.getByOwnerAndRepo(
    connection,
    typia.random<string>(),
    typia.random<string>(),
  );
  typia.assert(output);
}
