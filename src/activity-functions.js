export function home(location) {
  return location.pathname === "/home";
}

export function login(location) {
  return location.pathname === "/login";
}

export function signup(location) {
  return location.pathname === "/signup";
}

export function navbar(location) {
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return false;
  }
  else {
    return true;  //the navbar is always active 
  }
}

export function employeeDetails(location) {
  const regex = /^\/employees\/\d+?$/;
  return location.pathname.match(regex);
}