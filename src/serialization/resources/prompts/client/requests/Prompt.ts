/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const Prompt: core.serialization.Schema<serializers.Prompt.Raw, SuperAgent.Prompt> = core.serialization.object({
    name: core.serialization.string(),
    inputVariables: core.serialization.property(
        "input_variables",
        core.serialization.list(core.serialization.unknown())
    ),
    template: core.serialization.string(),
});

export declare namespace Prompt {
    interface Raw {
        name: string;
        input_variables: unknown[];
        template: string;
    }
}
