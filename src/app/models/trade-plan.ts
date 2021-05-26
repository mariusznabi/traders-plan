import { Phase } from "./phase";

export interface TradePlan {
    name: string;
    description: string;
    phases: Phase[];
}