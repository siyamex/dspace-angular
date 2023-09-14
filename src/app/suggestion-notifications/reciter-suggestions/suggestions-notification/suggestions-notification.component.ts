import { Component, OnInit } from '@angular/core';
import { SuggestionTarget } from '../../../core/suggestion-notifications/reciter-suggestions/models/suggestion-target.model';
import { TranslateService } from '@ngx-translate/core';
import { SuggestionTargetsStateService } from '../suggestion-targets/suggestion-targets.state.service';
import { NotificationsService } from '../../../shared/notifications/notifications.service';
import { SuggestionsService } from '../suggestions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ds-suggestions-notification',
  templateUrl: './suggestions-notification.component.html',
  styleUrls: ['./suggestions-notification.component.scss']
})
export class SuggestionsNotificationComponent implements OnInit {

  labelPrefix = 'mydspace.';

  /**
   * The user suggestion targets.
   */
  suggestionsRD$: Observable<SuggestionTarget[]>;

  constructor(
    private translateService: TranslateService,
    private reciterSuggestionStateService: SuggestionTargetsStateService,
    private notificationsService: NotificationsService,
    private suggestionsService: SuggestionsService
  ) { }

  ngOnInit() {
    this.suggestionsRD$ = this.reciterSuggestionStateService.getCurrentUserSuggestionTargets();
  }

  /**
   * Interpolated params to build the notification suggestions notification.
   * @param suggestionTarget
   */
  public getNotificationSuggestionInterpolation(suggestionTarget: SuggestionTarget): any {
    return this.suggestionsService.getNotificationSuggestionInterpolation(suggestionTarget);
  }

}
