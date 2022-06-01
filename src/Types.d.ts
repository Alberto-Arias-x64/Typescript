export type Task_Status = 'Storaged' | 'Execution' | 'Stand by' | 'Abandoned'

export interface To_Do_Structure {
    id: number,
    date: string,
    title: string,
    description: string,
    tk_status: Task_Status,
}