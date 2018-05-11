/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import listController from './schedulerList.controller';
import addController from './schedulerAdd.controller';
import editController from './schedulerEdit.controller';
import {templateUrl} from '../shared/template-url/template-url.factory';
import schedulerDatePicker from './schedulerDatePicker.directive';
import { N_ } from '../i18n';
import DeleteSchedule from './factories/delete-schedule.factory';
import RRuleToAPI from './factories/r-rule-to-api.factory';
import SchedulePost from './factories/schedule-post.factory';
import ToggleSchedule from './factories/toggle-schedule.factory';
import SchedulesList from './schedules.list';
import ScheduledJobsList from './scheduled-jobs.list';

export default
    angular.module('scheduler', [])
        .controller('schedulerListController', listController)
        .controller('schedulerAddController', addController)
        .controller('schedulerEditController', editController)
        .factory('DeleteSchedule', DeleteSchedule)
        .factory('RRuleToAPI', RRuleToAPI)
        .factory('SchedulePost', SchedulePost)
        .factory('ToggleSchedule', ToggleSchedule)
        .factory('SchedulesList', SchedulesList)
        .factory('ScheduledJobsList', ScheduledJobsList)
        .directive('schedulerDatePicker', schedulerDatePicker);
