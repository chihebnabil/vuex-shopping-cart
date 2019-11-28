import auth from "./+auth";
import pages from "./+pages";
import shop from "./+shop";

const Routes = [...auth, ...pages, ...shop];

export default Routes;
