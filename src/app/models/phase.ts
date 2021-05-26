import { Step } from "./step";

export interface Phase {
    name: string;
    description: string;
    steps: Step[];
}