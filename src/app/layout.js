"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
// These styles apply to every route in the application
require("./globals.css");
const Header_1 = __importDefault(require("@/components/layout/Header"));
exports.metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/*Headers*/}
        <Header_1.default />
        {children}
      </body>
    </html>
  );
}
exports.default = RootLayout;
