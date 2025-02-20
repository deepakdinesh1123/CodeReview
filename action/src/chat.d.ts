import { z } from "zod";
declare const FileReviewResponse: z.ZodObject<{
    review: z.ZodString;
    position: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    review: string;
    position: number;
}, {
    review: string;
    position: number;
}>;
type FileReviewType = z.infer<typeof FileReviewResponse>;
export declare class Chat {
    private openai;
    private isAzure;
    constructor(apiKey: string);
    private generateFileReviewUserPrompt;
    private generatePRSummaryUserPrompt;
    fileReview(patch: string, filename: string): Promise<FileReviewType | null>;
    getPRSummary(changedFiles: string): Promise<string>;
    getCommitReviewsSummary(fileReviews: string): Promise<string>;
}
export {};
