import * as React from "react";
import {
  BsFillPenFill,
  BsFillTrashFill,
  BsFillCalendar3WeekFill,
  BsReplyAllFill,
  BsShareFill,
  BsMailbox2,
  BsTelephoneFill,
  BsFilePerson,
} from "react-icons/bs";
import "./style.scss";

const ContactCard=() => {


  return (
    
    <div id="info" className="bg-white-500">
      <div className="flex flex-col pb-2 overflow-auto">
        <div
          className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
          draggable="true"
        >

          <div className="rounded-md pl-6 text-sm font-medium text-gray-800">
            <div className="flex items-center w-full mt-3 ">
              <div className="flex items-center">
                <BsFilePerson color="rgb(59, 106, 233)"/>
                <span className="ml-1 leading-none">Steiver Natacha</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center">
                <BsTelephoneFill color="rgb(59, 106, 233)" />
                <span className="ml-1 leading-none">+32488996765</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center">
                <BsMailbox2 color="rgb(59, 106, 233)" />
                <span className="ml-1 leading-none">natachasteiver@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;