import React from "react";
import { Field, Form, Formik } from "formik";

function AddService() {
  const FormInitial = [
    {
      label: "Service Name",
      apiKey: "service_name",
      placeholder: "Enter Service name here !",
      type: "text",
    },
    {
      label: "Service Name",
      apiKey: "service_name",
      placeholder: "Enter Service name here !",
      type: "select",
      options: [{ value: "work", id: "work" }],
    },
  ];

  return (
    <div className="p-6">
      {/* form is done here */}
      <div>
        <Formik
          initialValues={{
            product_name: "",
            product_img: null,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, handleSubmit, values, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="grid laptop:grid-cols-2 gap-8">
                  {FormInitial &&
                    FormInitial.map((val, i) => {
                      if (val.type === "select") {
                        return (
                          <div key={i} className="flex flex-col space-y-2">
                            <label className="px-1 poppins font-medium">
                              {val.label}
                            </label>
                            <Field
                              name={val.apiKey}
                              as={val.type}
                              placeholder={"Enter service name"}
                              className="border py-2 px-1 font-normal outline-none capitalize"
                            >
                              {val.options.map((val, i) => {
                                return (
                                  <option
                                    className="capitalize"
                                    key={i}
                                    value={val.id}
                                  >
                                    {val.value}
                                  </option>
                                );
                              })}
                            </Field>
                          </div>
                        );
                      } else {
                        return (
                          <div key={i} className="flex flex-col space-y-2">
                            <label className="px-1 poppins font-medium">
                              {val.label}
                            </label>
                            <Field
                              name={val.apiKey}
                              type="text"
                              placeholder={"Enter service name"}
                              className="border py-2 px-1 "
                            />
                          </div>
                        );
                      }
                    })}
                </div>
                {/* for image */}
                <div className="mt-4 w-96 flex flex-col">
                  <label
                    htmlFor="product_img"
                    className="poppins font-medium pb-2"
                  >
                    Service Image
                  </label>
                  <label
                    htmlFor="product_img"
                    className="poppins font-medium bg-GrayLight h-full w-full border"
                  >
                    <img
                      src={
                        values.product_img
                          ? URL.createObjectURL(values.product_img)
                          : "https://images.unsplash.com/photo-1660039031080-7779c1760a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      }
                      alt="productimage"
                      className="h-72 mx-auto cursor-pointer"
                    />
                  </label>
                  <input
                    id={"product_img"}
                    name={"product_img"}
                    type="file"
                    accept=".gif,.jpg,.jpeg,.png,"
                    className="border-2 p-1 w-full outline-none mt-2"
                    onChange={(event) => {
                      let name = "product_img";
                      console.log("event.target", values[name]);
                      console.log(event.target.files[0]);
                      let value = event.target.files[0];
                      value === undefined
                        ? setFieldValue(name, values[name])
                        : setFieldValue(name, event.target.files[0]);
                    }}
                  />
                </div>
                <div className="w-full mt-6 ">
                  <button
                    type="submit"
                    className="px-8 py-2 bg-green-600 text-white rounded-sm shadow-md cursor-pointer"
                  >
                    Submit
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

export default AddService;