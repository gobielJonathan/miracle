import env from "../../.env.json";

export const LOGIN_URL : string = env.base_url + "Account/LogOn"
export const JOB_URL : string = env.base_url + "Schedule/GetJobsAssistant"
export const CLASS_SCHEDULE_URL : string = env.base_url + "Schedule/GetBinusmayaStudentSchedule"
export const ANNOUNCEMENT_URL : string = env.base_url + "Announcement/GetAnnouncement"
export const ROOM_TRANSACTIONS_URL : string = env.base_url + "Room/GetTransactions"
export const ROOM_URL : string = env.base_url + "Room/GetRooms"
export const COURSE_OUTLINE_URL : string = env.base_url + "Course/GetCourseOutlineInSemester"
export const SEMESTER_URL : string = env.base_url + "Schedule/GetSemesters"