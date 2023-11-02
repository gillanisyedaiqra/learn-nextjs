"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Button = ({ text }) => {
    return (<button className="bg-[#00616C] text-white px-8 py-4 rounded-full hover:shadow-lg
  text-xl font-medium hover:scale-105 duration-300">
      {text}
    </button>);
};
exports.default = Button;
