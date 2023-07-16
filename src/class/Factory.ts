import { faker } from "@faker-js/faker";
import { User } from "../entity/User";
import { UserProfile } from "../entity/UserProfile";
import { Todo } from "../entity/Todo";

export default class Factory {
  static user(sexType?: "female" | "male") {
    const user = new User();
    const sex = sexType || faker.person.sexType();

    user.firstName = faker.person.firstName(sex);
    user.lastName = faker.person.lastName(sex);
    user.age = faker.number.int({ min: 18, max: 33 });
    user.sex = sex;

    return user;
  }

  static userProfile() {
    const userProfile = new UserProfile();
    userProfile.nationality = faker.location.country();
    userProfile.bio = faker.person.bio();

    return userProfile;
  }

  static todo() {
    const todo = new Todo();
    todo.text = `${faker.word.verb()} ${faker.word.noun()}`;

    return todo;
  }
}
