
export const register = (password, email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = allowedUsers.find(user => user.email === email);
      if (existingUser) {
        reject(new Error("User with this email already exists"));
      } else {
        allowedUsers.push({ email, password });
        resolve({ message: "User registered successfully!" });
      }
    }, 1000);
  });
};


const allowedUsers = [
  { email: "user1@example.com", password: "password1" },
  { email: "user2@example.com", password: "password2" },
  { email: "user3@example.com", password: "password3" }
];

export const authorize = (password, email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = allowedUsers.find(user => user.email === email && user.password === password);
      if (user) {
        resolve({ token: "fakeToken" });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ valid: true });
    }, 1000);
  });
};


