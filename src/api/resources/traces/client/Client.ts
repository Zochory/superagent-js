/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Traces {
    interface Options {
        environment: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Traces {
    constructor(protected readonly _options: Traces.Options) {}

    /**
     * List all agent traces
     */
    public async listAgentTraces(): Promise<unknown> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "api/v1/traces"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "superagentai-js",
                "X-Fern-SDK-Version": "v0.0.38",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SuperAgentError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SuperAgentError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SuperAgentTimeoutError();
            case "unknown":
                throw new errors.SuperAgentError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
