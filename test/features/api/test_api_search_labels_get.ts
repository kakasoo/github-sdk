import api from "@kakasoo/github-sdk";
import { IApiSearchLabels } from "@kakasoo/github-sdk/lib/structures/IApiSearchLabels";
import { response } from "@kakasoo/github-sdk/lib/structures/response";
import typia from "typia";

export async function test_api_search_labels_get(connection: api.IConnection) {
  const output: response = await api.functional.search.labels.get(
    connection,
    typia.random<IApiSearchLabels.GetQuery>(),
  );
  typia.assert(output);
}
