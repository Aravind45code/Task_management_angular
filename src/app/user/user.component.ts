import {
  Component,
  Input,
  input,
  computed,
  EventEmitter,
  Output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //signals are different from normal updating mechanism
  //in normal state updating mechanism ,there is a zone created for component groups
  //In case of signals there is a centarlized system
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  // select = output<string>();
  //the above line is another way of crfeating output emitter ,this does not create any signals
  // avatar = input.required<string>();
  // name = input.required<string>();
  //the imagePath gets recomputed whenever the avatar signal is recomputed,understand the dependence
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });
  onSelectedUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
