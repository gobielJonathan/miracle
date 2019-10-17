export interface JobPayload{
    token : string;
    mode : JOB_MODE , 
    semesterId ?: string
}
export enum JOB_MODE {
    ACTIVE_JOB = "current",
    HISTORY_JOB = "history",
    FUTURE_JOB = 'future',
}
  