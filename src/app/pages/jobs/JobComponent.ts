import { JobsService } from "src/app/services/messier/jobs.service";
import { AuthService } from 'src/app/services/messier/auth.service';
import { SemesterService } from 'src/app/services/messier/semester.service';
import { Job } from 'src/app/models/Job';
import { Observable, Subscription } from 'rxjs';
import { JobPayload, JOB_MODE } from 'src/app/models/payload/JobPayload';

export abstract class JobComponent {

    protected jobs$: Observable<Job[]>
    protected subscription: Subscription;
    protected payload: JobPayload

    constructor(
        private semesterService: SemesterService,
        private authService: AuthService,
        private service: JobsService,
        private jobMode : JOB_MODE
    ) {
        this.payload = {
            token: this.authService.token,
            mode : this.jobMode
        }
    }

    getJobs() {
        this.subscription = this.semesterService.active.subscribe(res => {
            if (!res) return
            this.payload.semesterId = res.SemesterId
            this.jobs$ = this.service.getJobs(this.payload)
        })
    }
}