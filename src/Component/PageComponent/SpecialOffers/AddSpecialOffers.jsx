import React from "react";
import { Field, Form, Formik } from "formik";
import {AiFillDelete} from 'react-icons/ai'
function AddSpecialOffers({ setShowSpecialOffers }) {
  // form names and keys for mapping

  const FormInitial = [
    {
      label: "SpecialOffers Name",
      apiKey: "SpecialOffers_name",
      placeholder: "Enter SpecialOffers name here !",
      type: "text",
    },
    {
      label: "Price",
      apiKey: "SpecialOffers_price",
      placeholder: "Enter SpecialOffers price here !",
      type: "number",
    },
    {
      label: "Discount type",
      apiKey: "SpecialOffers_discount_type",
      placeholder: "Enter SpecialOffers discount type here !",
      type: "text",
    },
    {
      label: "Discount",
      apiKey: "SpecialOffers_discount_value",
      placeholder: "Enter SpecialOffers discount value here !",
      type: "number",
    },
  ];

  return (
    <div className="p-6">
      {/* form is done here */}
      <div>
        <Formik
          initialValues={{
            SpecialOffers_name: "",
            SpecialOffers_img: null,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ isSubmitting, handleSubmit, values, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8">
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
                              placeholder={"Enter SpecialOffers name"}
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
                              placeholder={"Enter SpecialOffers name"}
                              className="border py-2 px-1 "
                            />
                          </div>
                        );
                      }
                    })}
                </div>
                <div className={'grid grid-cols-1 laptop:grid-cols-2 gap-8'}>
                  {/* for image */}
                  <div className="mt-4 w-full flex flex-col">
                    <label
                      htmlFor="SpecialOffers_img"
                      className="poppins font-medium pb-2"
                    >
                      SpecialOffers Image
                    </label>
                    <label
                      htmlFor="SpecialOffers_img"
                      className="poppins font-medium bg-GrayLight h-full w-full border"
                    >
                      <img
                        src={
                          values.SpecialOffers_img
                            ? URL.createObjectURL(values.SpecialOffers_img)
                            : "https://images.unsplash.com/photo-1660039031080-7779c1760a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        }
                        alt="SpecialOffersimage"
                        className="h-96 w-96 mx-auto cursor-pointer"
                      />
                    </label>
                    <input
                      id={"SpecialOffers_img"}
                      name={"SpecialOffers_img"}
                      type="file"
                      accept=".gif,.jpg,.jpeg,.png,"
                      className="border-2 p-1 w-full outline-none mt-2"
                      onChange={(event) => {
                        let name = "SpecialOffers_img";
                        console.log("event.target", values[name]);
                        console.log(event.target.files[0]);
                        let value = event.target.files[0];
                        value === undefined
                          ? setFieldValue(name, values[name])
                          : setFieldValue(name, event.target.files[0]);
                      }}
                    />
                  </div>
                  {/* what are included in it */}
                  <div className="mt-4 w-full flex flex-col space-y-2">
                    <label className="px-1 poppins font-medium">
                      {`What's included in it?`}
                    </label>
                    <Field
                      name={"whats included in it"}
                      type="text"
                      placeholder={"Enter SpecialOffers name"}
                      className="border py-2 px-1 "
                    />
                    <div className="first-letter:capitalize mt-6">
                      <ol>
                        <li>
                            <div className={'flex justify-between first-letter:capitalize'}>
                            <div className='first-letter:capitalize'>mendhi and other</div>
                            <div>
                                <AiFillDelete className='text-2xl' />
                            </div>
                            </div>

                        </li>
                      </ol>
                    </div>
                  </div>
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

export default AddSpecialOffers;