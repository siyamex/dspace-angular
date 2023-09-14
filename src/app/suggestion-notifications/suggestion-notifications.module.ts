import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Action, StoreConfig, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { storeModuleConfig } from '../app.reducer';
import { QualityAssuranceTopicsComponent } from './qa/topics/quality-assurance-topics.component';
import { QualityAssuranceEventsComponent } from './qa/events/quality-assurance-events.component';
import { SuggestionNotificationsStateService } from './suggestion-notifications-state.service';
import { suggestionNotificationsReducers, SuggestionNotificationsState } from './suggestion-notifications.reducer';
import { suggestionNotificationsEffects } from './suggestion-notifications-effects';
import { QualityAssuranceTopicsService } from './qa/topics/quality-assurance-topics.service';
import {
  QualityAssuranceTopicDataService
} from '../core/suggestion-notifications/qa/topics/quality-assurance-topic-data.service';
import {
  QualityAssuranceEventDataService
} from '../core/suggestion-notifications/qa/events/quality-assurance-event-data.service';
import { ProjectEntryImportModalComponent } from './qa/project-entry-import-modal/project-entry-import-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchModule } from '../shared/search/search.module';
import { QualityAssuranceSourceComponent } from './qa/source/quality-assurance-source.component';
import { QualityAssuranceSourceService } from './qa/source/quality-assurance-source.service';
import {
  QualityAssuranceSourceDataService
} from '../core/suggestion-notifications/qa/source/quality-assurance-source-data.service';
import { SuggestionTargetsComponent } from './reciter-suggestions/suggestion-targets/suggestion-targets.component';
import { SuggestionActionsComponent } from './reciter-suggestions/suggestion-actions/suggestion-actions.component';
import {
  SuggestionListElementComponent
} from './reciter-suggestions/suggestion-list-element/suggestion-list-element.component';
import {
  SuggestionEvidencesComponent
} from './reciter-suggestions/suggestion-list-element/suggestion-evidences/suggestion-evidences.component';
import { SuggestionsPopupComponent } from './reciter-suggestions/suggestions-popup/suggestions-popup.component';
import {
  SuggestionsNotificationComponent
} from './reciter-suggestions/suggestions-notification/suggestions-notification.component';
import { SuggestionsService } from './reciter-suggestions/suggestions.service';
import { SuggestionsDataService } from '../core/suggestion-notifications/reciter-suggestions/suggestions-data.service';
import {
  SuggestionSourceDataService
} from '../core/suggestion-notifications/reciter-suggestions/source/suggestion-source-data.service';
import {
  SuggestionTargetDataService
} from '../core/suggestion-notifications/reciter-suggestions/target/suggestion-target-data.service';
import {
  SuggestionTargetsStateService
} from './reciter-suggestions/suggestion-targets/suggestion-targets.state.service';

const MODULES = [
  CommonModule,
  SharedModule,
  SearchModule,
  CoreModule.forRoot(),
  StoreModule.forFeature('suggestionNotifications', suggestionNotificationsReducers, storeModuleConfig as StoreConfig<SuggestionNotificationsState, Action>),
  EffectsModule.forFeature(suggestionNotificationsEffects),
  TranslateModule
];

const COMPONENTS = [
  QualityAssuranceTopicsComponent,
  QualityAssuranceEventsComponent,
  QualityAssuranceSourceComponent,
  SuggestionTargetsComponent,
  SuggestionActionsComponent,
  SuggestionListElementComponent,
  SuggestionEvidencesComponent,
  SuggestionsPopupComponent,
  SuggestionsNotificationComponent
];

const DIRECTIVES = [ ];

const ENTRY_COMPONENTS = [
  ProjectEntryImportModalComponent
];

const PROVIDERS = [
  SuggestionNotificationsStateService,
  QualityAssuranceTopicsService,
  QualityAssuranceSourceService,
  QualityAssuranceTopicDataService,
  QualityAssuranceSourceDataService,
  QualityAssuranceEventDataService,
  SuggestionsService,
  SuggestionSourceDataService,
  SuggestionTargetDataService,
  SuggestionTargetsStateService,
  SuggestionsDataService
];

@NgModule({
    imports: [
        ...MODULES
    ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...ENTRY_COMPONENTS
  ],
  providers: [
    ...PROVIDERS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})

/**
 * This module handles all components that are necessary for the OpenAIRE components
 */
export class SuggestionNotificationsModule {
}
