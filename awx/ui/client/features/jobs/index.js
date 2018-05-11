import JobsStrings from './jobs.strings';
import jobsRoute from './routes/jobs.route';
import { jobsSchedulesRoute } from '../../src/scheduler/schedules.route';

const MODULE_NAME = 'at.features.jobs';

angular
    .module(MODULE_NAME, [])
    .service('JobsStrings', JobsStrings)
    .run(['$stateExtender', ($stateExtender) => {
        $stateExtender.addState(jobsRoute);
        $stateExtender.addState(jobsSchedulesRoute);
    }]);

export default MODULE_NAME;
