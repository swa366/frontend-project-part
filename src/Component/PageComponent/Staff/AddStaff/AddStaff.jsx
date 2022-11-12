import React from "react";
import { Formik, Form, Field } from "formik";
import initialImage from "../../../Resources/images/brand.jpeg";
import axios from "../../../../Hoc/Axios/CreateAxios";
function AddStaff() {
  const StaffFormData = [
    {
      label: "staff Name",
      type: "text",
      apikey: "staff_name",
      placeholder: "Staff name ",
    },
    {
      label: "address",
      type: "text",
      apikey: "address",
      placeholder: "Address ",
    },
    {
      label: "contact no",
      type: "number",
      apikey: "phone_no",
      placeholder: "Contact no ",
    },
    {
      label: "email",
      type: "email",
      apikey: "email",
      placeholder: "Email  ",
    },
    {
      label: "salary",
      type: "number",
      apikey: "salary",
      placeholder: "Salary  ",
    },{
      label: "Docunment Type",
      type: "text",
      apikey: "docunment_type",
      placeholder: "eg: citizenship,passport"
    },{
      label: "Gender",
      type: "text",
      apikey: "gender",
      placeholder: "eg:male,female"
    },{
      label: "Working Hours",
      type: "number",
      apikey: "working_hours",
      placeholder: "eg:8 hrs ,12 hrs"
    },{
      label: "Citizenship No Or Pan No",
      type: "number",
      apikey: "citizenship_no_or_pan_no",
      placeholder: "eg:123456"
    }
  ];
  const Image = [
    {
      label: "document left",
      type: "file",
      apikey: "document_left",
      accept: ".jpg,.jpeg,.png",
    },
    {
      label: "document right",
      type: "file",
      apikey: "document_right",
      accept: ".jpg,.jpeg,.png",
    },
    {
      label: "staff image",
      type: "file",
      apikey: "employee_img",
      accept: ".jpg,.jpeg,.png",
    },
  ];
  return (
    <div>
      <div className="my-5 px-5">
        <Formik
          initialValues={{
            staff_name: "",
            salary: "",
            address: "",
            phone_no: "",
            email: "",
            employee_img: "",
            document_front_image: "",
            document_back_image: "",
            document_type:"",
            gender:"",
            working_hours:"",
            citizen_no_or_pan_no:"",
          }}
          onSubmit={(values) => {
            console.log(values);
            try {
              alert("working")
              values.employee_img="https://images.unsplash.com/photo-1667797314158-7efc70aaeb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              values.docunment_front_image="https://images.unsplash.com/photo-1667797314158-7efc70aaeb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              values.docunment_back_image="https://images.unsplash.com/photo-1667797314158-7efc70aaeb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              axios.post("staff",values).then(res=>{
               console.log(res)
              }).catch(error=>{
               console.log(error)
              })
             } catch (error) {
             console.log(error)  
             }
          }}
        >
          {({ touched, errors,handleSubmit, values, setFieldValue }) => {
            return (
              <Form className=" w-full " onSubmit={handleSubmit}>
                <div className="laptop:grid laptop:grid-cols-2 gap-x-8">
                  {StaffFormData.map((val, i) => {
                    return (
                      <div key={i}>
                        <div className="my-1 capitalize   font-semibold text-lg text-gray-700">
                          <label
                            className="cursor-pointer"
                            htmlFor={val.apikey}
                          >
                            {val.label}
                          </label>
                        </div>
                        <div className="my-1.5">
                          <Field
                            type={val.type}
                            placeholder={val.placeholder}
                            id={val.apikey}
                            name={val.apikey}
                            className="border bg-gray-50 outline-none w-full p-3 rounded-md"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* for images or document */}
                <div
                  className={`  laptop:grid grid-cols-2 gap-5 my-7   w-full`}
                >
                  {Image.map((val, i) => {
                    let AllImage = val.apikey;
                    return (
                      <div
                        key={i}
                        className={` ${
                          val.apikey === "employee_img"
                            ? "  col-span-2 row-start-1 "
                            : "row-start-2 "
                        }`}
                      >
                        <div className="my-2 capitalize   font-semibold text-lg text-gray-700">
                          <label
                            className="cursor-pointer"
                            htmlFor={val.apikey}
                          >
                            {val.label}
                          </label>
                        </div>
                        <div className="border bg-gray-100 p-4 full">
                          <label
                            htmlFor={val.apikey}
                            className={`cursor-pointer`}
                          >
                            {console.log(values.AllImage)}
                            <img
                              src={
                                values[AllImage]
                                  ? URL.createObjectURL(values[AllImage])
                                  : initialImage
                              }
                              alt="Loading ..."
                              height="100px"
                              width="400px"
                              className="m-auto h-60 laptop:h-80 "
                            />
                          </label>
                        </div>
                        <div className="hidden">
                          <input
                            name={val.apikey}
                            id={val.apikey}
                            type={val.type}
                            accept={val.accept}
                            onChange={(e) => {
                              let file = e.target.files[0];
                              console.log(file, AllImage);
                              setFieldValue(AllImage, e.target.files[0]);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <button
                    type="Submit"
                    className="bg-green-400 text-white 
                  px-5 py-2 font-semibold Poppins 
                  text-lg rounded-md capitalize"
                  >
                    submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default AddStaff;