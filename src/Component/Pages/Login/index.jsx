import React from "react";
import { Formik, Field, Form } from "formik";
// import { loginFormDataSchema } from "../../PageComponent/ValidationSchema/LoginFormSchema";
import logoImage from "../../Resources/images/dreamlogo.jpg";
import image from "../../Resources/images/profile.jpg";
function Login() {
  const loginFormData = [
    {
      label: "Email",
      placeholder: "Email or Phone number",
      type: "text",
      apikey: "email",
    },
    {
      label: "password",
      placeholder: "Password ",
      type: "password",
      apikey: "password",
    },
  ];
  const submit = () => {
    alert(555);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="bg-pink-50   col-span-5 flex flex-col py-10 items-center  h-screen">
        <div className="w-32 ">
          <img src={logoImage} alt="loading ..." />
        </div>
        <div>
          <img src={image} alt="loading ..." />
        </div>
      </div>
      <div className="flex  flex-col col-span-7 justify-center px-20 w-full ">
        <div className="font-semibold text-2xl  text-yellow-500 capitalize mb-1">
          {" "}
          welcome to Dream Salon
        </div>
        <div className="font-medium text-gray-400 text-sm  mb-4">
          {" "}
          Beauty is in the eye of the beholder and the hands of your stylist.
        </div>
        <div className=" w-full">
          <Formik
            initialValues={{ email: "", password: "" }}
            // validationSchema={}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className="w-11/12">
                <div className="  ">
                  {loginFormData.map((val, i) => {
                    return (
                      <div key={i}>
                        <div className="flex flex-col   mb-1 capitalize ">
                          <label
                            htmlFor={val.apikey}
                            className="cursor-pointer font-semibold"
                          >
                            {val.label}
                          </label>
                        </div>
                        <Field
                          id={val.apikey}
                          name={val.apikey}
                          placeholder={val.placeholder}
                          className="bg-blue-50 bg-opacity-80 border-gray-400  w-full p-2 mt-1 rounded-sm"
                        />
                        <div
                          className={` ${
                            errors?.[val.apikey] && touched?.[val.apikey]
                              ? " bg-red-50 "
                              : ""
                          } text-sm p-1  text-red-500  my-2`}
                        >
                          {errors?.[val.apikey] && touched?.[val.apikey]
                            ? errors[val.apikey]
                            : ""}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="submit"
                  className="bg-green-400 px-4 py-1 rounded-sm text-white font-semibold"
                  onClick={() => submit()}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;