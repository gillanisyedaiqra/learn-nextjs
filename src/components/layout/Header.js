"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logo_png_1 = __importDefault(require("/public/logo.png"));
const image_1 = __importDefault(require("next/image"));
const link_1 = __importDefault(require("next/link"));
const Wrapper_1 = __importDefault(require("@/components/shared/Wrapper"));
const Header = () => {
    return (<header className="sticky top-0 z-10 bg-white">
      <Wrapper_1.default>
        <header className="flex justify-between bg-white py-4 stickt top-0 items-centre">
          <div>
            {/* <h2 className="text-xl font-bold"> Panaverse Dao</h2> */}
            <image_1.default src={logo_png_1.default} height={100} width={100} alt="Panaverse Dao Logo"/>
          </div>
          <ul className="flex space-x-8 font-medium">
            <li>
              <link_1.default href={"/"}> Home </link_1.default>
            </li>
            <li>
              <link_1.default href={"/courses"}> Courses </link_1.default>
            </li>
          </ul>
        </header>
      </Wrapper_1.default>
    </header>);
};
exports.default = Header;
