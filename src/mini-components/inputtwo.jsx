import { useState } from "react";
import { useRef } from "react";

function NameInput({ textname, name, width }) {
  let classStyleOne =
    " border-solid rounded border-buttongray pl-[16px] pb-[4px]  hover:border-[1px] hover:border-gray border-[1px]  focus:outline-blue-500 font-montserrat font-medium text-[14px] " +
    width;
  let classStyleTwo =
    " border-solid rounded focus:outline-blue-500 border-rose-500 border-[1px] pl-[16px] pb-[4px] font-montserrat font-medium text-[14px] " +
    width;
  const [errorState, seterrorState] = useState(false);
  const [red, setred] = useState(false);
  const [specialCharacter, setspecialCharacter] = useState(false);
  const myRef = useRef(null);
  return (
    <div className="flex flex-col gap-[6px] ml-[40px]">
      <p className="text-[13px] font-montserrat font-medium text-gray">
        {textname}
      </p>
      {errorState ? (
        <p className="text-[11px] font-montserrat font-medium text-rose-500">
          * name cannot be less than three characters
        </p>
      ) : (
        <></>
      )}
      {specialCharacter ? (
        <p className="  text-[11px] font-montserrat font-medium text-rose-500">
          * name cannot contain special characters,space and numbers.
        </p>
      ) : (
        <></>
      )}
      <input
        ref={myRef}
        className={errorState ? classStyleTwo : classStyleOne}
        onChange={(e) => {
          let value = myRef.current.value;
          let regex = /[^a-zA-Z_]/;
          let regexResult = regex.test(value);
          console.log(value);
          if (value.length < 3) {
            seterrorState(true);
            console.log(errorState);
          } else if (
            value.length >= 3 &&
            regexResult == false &&
            value.length <= 15
          ) {
            seterrorState(false);
            setspecialCharacter(false);
          } else if (value.length >= 3 && regexResult == true) {
            setspecialCharacter(true);
          }
        }}
        type="text"
        name={name}
        id=""
      />
    </div>
  );
}

function Username({ textname, name, width }) {
  let classStyleOne =
    " border-solid rounded bg-white border-buttongray pl-[16px] pb-[4px]  hover:border-[1px] hover:border-gray border-[1px]  focus:outline-blue-500 font-montserrat font-medium text-[14px] " +
    width;
  let classStyleTwo =
    " border-solid rounded focus:outline-blue-500 border-rose-500 border-[1px] pl-[16px] pb-[4px]  font-montserrat font-medium text-[14px] " +
    width;
  const [errorState, seterrorState] = useState(false);
  const [red, setred] = useState(false);
  const myRef = useRef(null);
  return (
    <div className="flex flex-col gap-[6px] ml-[40px]">
      <p className="text-[13px] font-montserrat font-medium text-gray">
        {textname}
      </p>
      {errorState ? (
        <p className="text-[11px] font-montserrat font-medium text-rose-500">
          * username cannot be less than five characters
        </p>
      ) : (
        <></>
      )}
      <input
        ref={myRef}
        className={errorState ? classStyleTwo : classStyleOne}
        onChange={(e) => {
          let entry = e.target.value;
          let trim = entry.replace(/\s/g, "");
          myRef.current.value = trim;
          console.log(trim);
          if (trim.length < 5) {
            seterrorState(true);
            console.log(errorState);
          } else if (trim.length >= 5) {
            seterrorState(false);
          }
        }}
        type="text"
        name={name}
        id=""
      />
    </div>
  );
}

function EmailInput({ textname, name, width }) {
  let classStyleOne =
    " border-solid rounded border-buttongray pl-[16px] pb-[4px]  hover:border-[1px] hover:border-gray border-[1px] focus:drop-shadow-md focus:outline-blue-500 font-montserrat font-medium text-[14px] " +
    width;
  let classStyleTwo =
    " border-solid rounded focus:outline-blue-500 border-rose-500 border-[1px] pl-[16px] pb-[4px]   font-montserrat font-medium text-[14px] " +
    width;
  const [errorState, seterrorState] = useState(false);
  return (
    <div className="flex flex-col gap-[6px] ml-[40px]">
      <p className="text-[13px] font-montserrat font-medium text-gray">
        {textname}
      </p>
      {errorState ? (
        <p className="text-[11px] font-montserrat font-medium text-rose-500">
          * Email address is not valid
        </p>
      ) : (
        <></>
      )}
      <input
        className={errorState ? classStyleTwo : classStyleOne}
        onChange={(e) => {
          let entry = e.target.value;
          let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          let emailtest = regex.test(entry);
          if (emailtest) {
            seterrorState(false);
            console.log(errorState);
          } else if (!emailtest) {
            seterrorState(true);
          }
        }}
        type="text"
        name={name}
        id=""
      />
    </div>
  );
}

function Date({ textname, name, width }) {
  let classStyleOne =
    " border-solid rounded border-buttongray pl-[16px] pr-[10px] pb-[1px]  hover:border-[1px] hover:border-gray border-[1px] focus:drop-shadow-md focus:outline-blue-500 font-montserrat font-medium text-[14px] " +
    width;
  return (
    <div className="flex flex-col gap-[6px] ml-[40px]">
      <p className="text-[13px] font-montserrat font-medium text-gray">
        {textname}
      </p>
      <input className={classStyleOne} type="date" name={name} id="" />
    </div>
  );
}

function Password({ textname, name, width }) {
  let classStyleOne =
    " border-solid rounded border-buttongray pl-[16px] pb-[4px]  hover:border-[1px] hover:border-gray border-[1px]  focus:outline-blue-500 font-montserrat font-medium text-[14px] " +
    width;
  let classStyleTwo =
    " border-solid rounded focus:outline-blue-500 border-rose-500 border-[1px] pl-[16px] pb-[4px]   font-montserrat font-medium text-[14px] " +
    width;
  const [errorState, seterrorState] = useState(false);
  return (
    <div className="flex flex-col gap-[6px] ml-[40px]">
      <p className="text-[13px] font-montserrat font-medium text-gray">
        {textname}
      </p>
      {errorState ? (
        <p className="text-[11px] font-montserrat font-medium text-rose-500">
          * Password cannot be less than five characters
        </p>
      ) : (
        <></>
      )}
      <input
        className={errorState ? classStyleTwo : classStyleOne}
        onChange={(e) => {
          let value = e.target.value;
          if (value.length < 3) {
            seterrorState(true);
            console.log(errorState);
          } else if (value.length >= 3) {
            seterrorState(false);
          }
        }}
        type="text"
        name={name}
        id=""
      />
    </div>
  );
}

const inputRelatedTwo = {
  NameInput,
  Username,
  EmailInput,
  Date,
  Password,
};

export default inputRelatedTwo;
