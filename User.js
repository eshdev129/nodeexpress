import { v4 as uuidV4 } from "uuid";

class User {
  constructor() {
    this.id;
    this.name;
    this.email;
    this.password;
    this.creat_at = new Date();
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
