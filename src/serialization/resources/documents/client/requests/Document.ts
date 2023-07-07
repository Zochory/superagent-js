/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const Document: core.serialization.Schema<serializers.Document.Raw, SuperAgent.Document> =
    core.serialization.object({
        type: core.serialization.string(),
        url: core.serialization.string(),
        name: core.serialization.string(),
        authorization: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        fromPage: core.serialization.property("from_page", core.serialization.number().optional()),
        toPage: core.serialization.property("to_page", core.serialization.number().optional()),
        splitter: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace Document {
    interface Raw {
        type: string;
        url: string;
        name: string;
        authorization?: Record<string, unknown> | null;
        from_page?: number | null;
        to_page?: number | null;
        splitter?: Record<string, unknown> | null;
    }
}
