
import React from "react";
import { Formik, Field, Form } from "formik";
import { IoIosPeople } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import axios from "../../../Hoc/Axios/CreateAxios";

function BillingForm({setCustomerinfo}) {
  
  const billingFormData = [
    {
      type: "text",
      placeholder: "Customer's Name ",
      apikey: "customer_name",
      label: "customer name",
    },
    {
      sub: [
        {
          type: "text",
          placeholder: "Phone Number ",
          apikey: "phone_no",
          label: "phone number",
          icon: <BsFillTelephoneFill className="h-5 w-5 " />,
        },
        {
          type: "text",
          placeholder: "Address ",
          apikey: "address",
          label: " address",
          icon: <HiLocationMarker className="h-6 w-6" />,
        },
      ],
    },
    {
      type: "text",
      placeholder: "email ",
      apikey: "email",
      label: "Email",
      icon: <BsFillTelephoneFill className="h-5 w-5 " />,
    },
  ];
  const submit = (val) => {
    // console.log(7);
    console.log(val);
    try {
     val.image="https://images.unsplash.com/photo-1667797314158-7efc70aaeb91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
     axios.post("customer",val).then(res=>{
      console.log(res)
      setCustomerinfo(val)
     }).catch(error=>{
      console.log(error)
     })
    } catch (error) {
    console.log(error)  
    }
  };

  

  return (
    <div className=" mt-8  mobileL:mt-4">
      <Formik
        initialValues={{
          customer_name: "",
          address: "",
          phone_no: "",
          email:"",
        }}
        // validationSchema={loginFormDataSchema}
        onSubmit={(values) => {
          console.log(values, "part");
          submit(values)
        }}
      >
        {({ values, initialErrors, touched, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className={`   gap-6`}>
              {billingFormData.map((val, i) => {
                if (val.sub) {
                  return (
                    <div className="laptop:grid grid-cols-2 gap-5">
                      {val.sub.map((val, i) => {
                        return (
                          <div key={i} className="laptop:w-full   my-5">
                            <div className="capitalize  my-2">
                              <label
                                className="cursor-pointer font-semibold text-gray-600"
                                for={val.apikey}
                              >
                                {val.label}
                              </label>
                            </div>
                            <div className="relative">
                              <label htmlFor={val.apikey}>
                                {" "}
                                <div className="absolute top-3  cursor-pointer left-2 text-gray-300 bg-opacity-80">
                                  {val.icon}
                                </div>
                              </label>
                              <Field
                                id={val.apikey}
                                placeholder={val.placeholder}
                                name={val.apikey}
                                className="bg-sky-50 px-10 py-2.5 w-11/12 laptop:w-full rounded-md"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="full ">
                      <div className="capitalize  mb-2">
                        <label
                          className="cursor-pointer text-gray-600 font-semibold"
                          for={val.apikey}
                        >
                          {val.label}
                        </label>
                      </div>
                      <div className="relative">
                        <label htmlFor={val.apikey}>
                          {" "}
                          <div className="absolute top-2.5 cursor-pointer left-1 text-gray-300 bg-opacity-80">
                            <IoIosPeople className="h-7 w-7" />
                          </div>
                        </label>
                        <Field
                          id={val.apikey}
                          placeholder={val.placeholder}
                          name={val.apikey}
                          className="bg-sky-50 px-10 py-2.5  w-11/12 laptop:w-full rounded-md"
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="my-5">
        <button
          type="submit"
          className="bg-green-400 px-4 py-1 rounded-sm text-white font-semibold"
        >
          Submit
        </button>
      </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BillingForm;